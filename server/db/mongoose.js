const mongoose = require("mongoose");

const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(
  "mongodb://localhost:27017/auth0DB",
  { ...mongooseConfig },
  (err) => {
    if (err) console.log(err);
    else console.log("Connected to MongoDB");
  }
);
