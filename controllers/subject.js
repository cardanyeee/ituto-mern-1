const Subject = require('../models/Subject');
const Tutor = require('../models/Tutor');

const ErrorResponse = require('../utils/errorResponse');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');


//  FOR ANALYTICSSSSSSS///////

exports.reportsRequestedSubject = catchAsyncErrors(async (req, res, next) => {
    try {


        res.status(200).json({
            success: true,

        })

    } catch (error) {
        next(error);
    }


});

exports.reportsToOfferedSubject = catchAsyncErrors(async (req, res, next) => {
    try {

        const subjectsCount = await Tutor.aggregate([
            { $unwind: "$subjects" },
            {
                $group: {
                    _id: "$subjects",
                    count: { $sum: 1 }
                }
            },
            { $sort: { count: -1 } },
            { $limit: 10 },
            { $lookup: { from: 'subjects', localField: '_id', foreignField: '_id', as: 'subject' } }
        ]);

        res.status(200).json({
            success: true,
            subjectsCount
        })

    } catch (error) {
        next(error);
    }


});


exports.reportsRequestedbyMale = catchAsyncErrors(async (req, res, next) => {
    try {
        res.status(200).json({
            success: true,

        })

    } catch (error) {
        next(error);
    }


});


exports.reportsRequestedbyFemale = catchAsyncErrors(async (req, res, next) => {
    try {
        res.status(200).json({
            success: true,

        })

    } catch (error) {
        next(error);
    }


});










exports.index = catchAsyncErrors(async (req, res, next) => {
    try {

        const subjects = await Subject.find().populate('course');

        res.status(200).json({
            success: true,
            subjects
        })

    } catch (error) {
        next(error);
    }
});

exports.courseSubjects = catchAsyncErrors(async (req, res, next) => {
    try {
        console.log(req.params);
        const subjects = await Subject.find({ course: req.params.course });

        res.status(200).json({
            success: true,
            subjects
        })

    } catch (error) {
        next(error);
    }
});

exports.add = catchAsyncErrors(async (req, res, next) => {
    try {
        const subject = await Subject.create(req.body);

        res.status(200).json({
            status: "Record Added",
            success: true,
            subject
        });
    } catch (error) {
        next(error);
    }
});

exports.update = catchAsyncErrors(async (req, res, next) => {
    try {
        let subject = await Subject.findById(req.params.id);

        subject = await Subject.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        res.status(200).json({
            success: true,
            subject
        });
    } catch (error) {
        next(new ErrorResponse('Subject not found', 404));
    }
});

exports.find = catchAsyncErrors(async (req, res, next) => {
    try {
        const subject = await Subject.findById(req.params.id);

        res.status(200).json({
            success: true,
            subject
        });
    } catch (error) {
        next(new ErrorResponse('Subject not found', 404));
    }
});

// exports.remove = catchAsyncErrors(async (req, res, next) => {
//     try {
//         await Movie.findByIdAndDelete(req.params.id);

//         res.status(200).json({
//             success: true,
//             message: "Record Deleted"
//         });
//     } catch (error) {
//         next(error);
//     }
// });

// exports.getAdminMovies = catchAsyncErrors(async (req, res, next) => {

//     const movies = await Movie.find();

//     res.status(200).json({
//         success: true,
//         movies
//     })

// });