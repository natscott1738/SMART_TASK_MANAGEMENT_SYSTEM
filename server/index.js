import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import dbConnection from "./utils/index.js";
import { errorHandler, roouteNotFound } from "./middlewares/errorMiddlewares.js";


const routes = "";

dotenv.config();

dbConnection();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser());
app.use(morgan("dev"));
// app.use("/api", routes);


app.use(roouteNotFound)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))