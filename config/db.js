const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.mongourl);
    console.log("bro Database Connected Successfully ✈️🚀✈️🚀");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;