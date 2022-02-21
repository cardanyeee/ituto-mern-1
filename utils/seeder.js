const Course = require('../models/Course');
const Subject = require('../models/Subject');

const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const courses = require('../data/courses.json');
const subjects = require('../data/subjects.json');

dotenv.config({ path: 'config.env' });

connectDatabase();

const seedCourses = async () => {
    try {
        
        await Course.deleteMany();
        console.log('Courses Deleted');

        await Course.insertMany(courses);
        console.log('All Courses Added');

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

const seedSubjects = async () => {
    try {
        
        await Subject.deleteMany();
        console.log('Subjects Deleted');

        await Subject.insertMany(subjects);
        console.log('All Subjects Added');

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

// seedCourses();
seedSubjects();