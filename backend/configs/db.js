const mongoose = require("mongoose");

exports.connectDataBase = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((con) => console.log(`database connect : ${con.connection.host}`))
    .catch((err) => console.log(err));
};
