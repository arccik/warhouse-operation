import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    // if it is not ready yet return
    return;
  }

  mongoose
    .connect(process.env.MONGODB_URI)
    .catch((err) => console.log(err))
    .then((con) => console.log("connected to db"));
};

export default dbConnect;
