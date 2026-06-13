const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const dbUser = process.env.DB_USER;
        const dbPass = process.env.DB_PASSWORD;
        const dbName = process.env.DB_NAME || 'color-db';
        const dbHost = process.env.DB_HOST || 'mongodb-svc';

        const uri = `mongodb://${dbUser}:${dbPass}@${dbHost}:27017/${dbName}?authSource=${dbName}`;

        await mongoose.connect(uri);
        console.log('MongoDB Connected Successfully!');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;