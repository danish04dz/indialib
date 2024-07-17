import mongoose from "mongoose";



const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
        .then(() => console.log('MongoDB Connected'))
        .catch((error) => console.log('MongoDB connection error:', error));
}

export default connectDB;