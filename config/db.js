const mongoose = require('mongoose');
//Set up default mongoose connection

const connectDB = () => {
    mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true });
    //Get the default connection
    const db = mongoose.connection;
    //Bind connection to error event (to get notification of connection errors)
    db.on('error', (error) => console.error(`MongoDB connection error: ${error.message}`))

    //Display message when connection to db is successful
    db.once('open', () => console.log(`Connected to Database \u2714`))
}

module.exports = connectDB