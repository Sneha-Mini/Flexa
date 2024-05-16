const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://sneha:Sakthivel%4019@flexa.xlq0fsw.mongodb.net/login?retryWrites=true&w=majority');
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(error); 
        process.exit(1);
    }

};

module.exports = connectDB;