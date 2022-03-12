import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const connection_url =
  "mongodb+srv://avinashkumar:avinashkumar@cluster0.k9cmj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const port = process.env.port || 5000;

mongoose
  .connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(port, () => console.log(`Server is running on ${port}`))
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
