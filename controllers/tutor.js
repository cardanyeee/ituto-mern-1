const Tutor = require('../models/Tutor');
const User = require('../models/User');

const ErrorResponse = require('../utils/errorResponse');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');

exports.signUpTutor = catchAsyncErrors(async (req, res, next) => {
    try {

        const tutor = await Tutor.find({ userID: req.user._id });
        const user = await User.findById(req.user._id);

        const { availability } = req.body;

        if (!tutor) {
            return next(new ErrorResponse("User already has a tutor account", 409));
        }

        if (!user) {
            return next(new ErrorResponse("User does not exist", 404));
        }

        user.isTutor = true;

        const newTutor = await Tutor.create({
            userID: req.user.id,
            availability
        });

        await user.save();

        res.status(200).json({
            success: true,
            newTutor
        });
    } catch (error) {
        next(error);
    }
});
