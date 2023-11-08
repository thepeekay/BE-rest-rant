const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 30000,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

module.exports.Place = require('./places');
