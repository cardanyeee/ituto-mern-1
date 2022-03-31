const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto')
const jwt = require('jsonwebtoken');
const validator = require('validator');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: [true, "Please enter a valid firstname"]
    },
    lastname: {
        type: String,
        required: [true, "Please enter a valid lastname"]
    },
    username: {
        type: String,
        required: [true, "Please enter a valid username"]
    },
    birthdate: {
        type: Date,
        // required: [true, 'Please enter a valid birthdate'],
        trim: true
    },
    gender: {
        type: String,
        // required: [true, 'Please select your gender'],
        enum: {
            values: [
                "Male",
                "Female",
                "Other",
                'Prefer not to say'
            ],
            message: 'Please select your gender'
        }
    },
    course: {
        type: mongoose.Schema.ObjectId,
        ref: 'Course'
    },
    yearLevel: {
        type: String,
        enum: {
            values: [
                "Fourth",
                "Third",
                "Second",
                "First"
            ]
        }
    },
    isTutor: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        required: [true, "Please enter a valid email address"],
        unique: true,
        match: [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please add a valid email address',
        ],
        validate: [validator.isEmail, 'Please add a valid email address']
    },
    phone: {
        type: String
    },
    password: {
        type: String,
        required: [true, "Please enter a valid password"],
        minlength: 6,
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            default: 'avatars/1636619587424empty_profile_f28fsh.png'
        },
        url: {
            type: String,
            default: 'https://res.cloudinary.com/djqpxmv5o/image/upload/v1647321463/movflix/avatars/blank_avatar_x64ypn.png'
        }
    },
    active: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        default: 'user'
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
}, {
    timestamps: true
});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.methods.matchPasswords = async function (password) {
    return await bcrypt.compare(password, this.password);
}

UserSchema.methods.getSignedToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
}

UserSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString('hex');

    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;

    return resetToken;
}

const User = mongoose.model('User', UserSchema);

module.exports = User;
