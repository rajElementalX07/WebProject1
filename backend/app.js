import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';

import error from './middlewares/error.js';
import ErrorHandler from './utils/errorHandler.js';
import authRoutes from './routes/authRoutes.js';
import PdfDetails from './models/PdfDetails.js';
import fs from 'fs';
import path from 'path';
dotenv.config();
const app = express();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './files')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null, file.originalname)
    }
  })
const upload = multer({ storage: storage })

app.use(express.json());
app.use(cors({
    origin:"*",
    methods:["GET","POST","DELETE","UPDATE","PUT","PATCH"],
    credentials: true,
}))
app.use("/files",express.static("files"));

app.post("/upload-files", upload.single('file'),async(req,res) => {
    console.log(req.file);
    const title  = req.body.title;
    const fileName = req.file.filename;
    const year = Number(req.body.year);
    console.log("backend : "+year);
    
    try {
        // await PdfDetails.create({title:title,pdf:fileName,year: year});
        // res.send({status:"ok"});

        const existingFile = await PdfDetails.findOne({ title, year });

        if (existingFile) {
            const oldFilePath = path.join(__dirname, "files", existingFile.pdf);
            if (fs.existsSync(oldFilePath)) {
                fs.unlinkSync(oldFilePath); // Remove old file
            }

            
            existingFile.pdf = fileName;
            existingFile.year = year;
            await existingFile.save();
        } else {
            // If no existing file, create a new entry
            await PdfDetails.create({ title, pdf: fileName, year });
        }

        res.send({ status: "ok" });
    } catch (error) {
        res.json({status:error});
    }
})

app.get("/get-files",async(req,res) => {
    try {
        await PdfDetails.find({}).then((data) => {
            res.send({ status: "ok", data: data });
        });
    } catch (error) {
        res.json({status:error});
    }
})

app.get("/get-file",async(req,res) => {

    try {
        const {title} = req.query;

        if(!title){
            return res.status(400).json({ status: "error", message: "Title is required" });
        }

        const fileData = await PdfDetails.findOne({ title });

        if(!fileData){
            return res.status(404).json({ status: "error", message: "File not found" });
        }

        res.json({ status: "ok", data: fileData });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
})

app.get('/',(req,res)=>{
    res.json({message:'Welcome to Farm server'});
})

app.use('/api',authRoutes);

app.all('*',async(req,res,next)=>{
    return next(new ErrorHandler('Not Found. Kindly check the API path as well as request type', 404));
})

app.use(error)

export default app;