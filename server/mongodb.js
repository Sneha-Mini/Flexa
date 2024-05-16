const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('your mongodb connectivity link');
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(error); 
        process.exit(1);
    }

};

module.exports = connectDB;