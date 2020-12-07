const mongoose = require('mongoose');

const dbConnect = () => {
    // connect db
    mongoose.connect('mongodb://localhost:27017/book-app', {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true
    });
}

module.exports = dbConnect;