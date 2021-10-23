import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI || "",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log(`Hooray! 🎉🎉 Connected to Database.`);
    } catch (err) {
        console.log(err);
    }
};

