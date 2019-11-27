var mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// database connection event
mongoose.connection.on("connected", function(error, db) {
    if(error) throw new Error(error)
    console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
});

    module.exports = mongoose;