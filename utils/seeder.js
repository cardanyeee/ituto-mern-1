const User = require('../models/User');

const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const users = require('../data/users');

dotenv.config({ path: 'config.env' });

connectDatabase();

const seedTutors = async () => {
    try {
        
        await Producer.deleteMany();
        console.log('Tutors Deleted');

        await Producer.insertMany(producers);
        console.log('All Tutors Added');

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedTutors();


// const seedProducers = async () => {
//     try {
        
//         await Producer.deleteMany();
//         console.log('Producer deleted');

//         await Producer.insertMany(producers);
//         console.log('All Producers Added');

//         process.exit();

//     } catch (error) {
//         console.log(error.message);
//         process.exit();
//     }
// }

// const seedActors = async () => {
//     try {
        
//         await Actor.deleteMany();
//         console.log('Actor deleted');

//         await Actor.insertMany(actors);
//         console.log('All Actors Added');

//         process.exit();

//     } catch (error) {
//         console.log(error.message);
//         process.exit();
//     }
// }

// const seedMovies = async () => {
//     try {
        
//         await Movie.deleteMany();
//         console.log('Movie deleted');

//         await Movie.insertMany(movies);
//         console.log('All Movies Added');

//         process.exit();

//     } catch (error) {
//         console.log(error.message);
//         process.exit();
//     }
// }

// seedProducers();
// seedActors();
// seedMovies();