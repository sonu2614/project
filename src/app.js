import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

//data from json
app.use(express.json({limit:"16kb"}))

//data from url
app.use(express.urlencoded({extended:true,limit:"16kb"}))

//store file ,pdf & images
app.use(express.static("public"))

app.use(cookieParser())


export { app }