import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import DbConn from "./db.js";
import Colors from "colors";
import router from "./routes/authRoute.js";

const app = express();
const port = 8080;

// configeration of env file
dotenv.config();

// db connection
DbConn();

// middlewears
app.use(express.json());
app.use(morgan("dev"));

// using router
app.use("/api/auth", router);

// rest api
app.get("/", (req, res) => {
  res.send({
    message: "taliya taliya",
  });
});

app.listen(port, () => {
  console.log("app listning to port bababa".bgGreen.white);
});
