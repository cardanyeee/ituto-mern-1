const Course = require('../models/Course');

const ErrorResponse = require('../utils/errorResponse');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');

exports.index = catchAsyncErrors(async (req, res, next) => {
    try {

        const courses = await Course.find();

        res.status(200).json({
            success: true,
            courses
        })

    } catch (error) {
        next(error);
    }
});

exports.add = catchAsyncErrors(async (req, res, next) => {
    try {
        const course = await Course.create(req.body);

        res.status(200).json({
            status: "Record Added",
            success: true,
            course
        });
    } catch (error) {
        next(error);
    }
});

exports.update = catchAsyncErrors(async (req, res, next) => {
    try {
        let course = await Course.findById(req.params.id);

        course = await Course.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        res.status(200).json({
            success: true,
            course
        });
    } catch (error) {
        next(new ErrorResponse('Course not found', 404));
    }
});

exports.find = catchAsyncErrors(async (req, res, next) => {
    try {
        const course = await Course.findById(req.params.id);

        res.status(200).json({
            success: true,
            course
        });
    } catch (error) {
        next(new ErrorResponse('Course not found', 404));
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