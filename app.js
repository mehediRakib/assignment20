const express=require('express');
const app=new express();
const router=require('./src/routes/api')

const cors=require('cors');
const helmet=require('helmet');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const rateLimit=require('express-rate-limit');
const MongoSanitize=require('express-mongo-sanitize');
const mongoose = require("mongoose");



app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(cookieParser());



//Ratelimit implementation

const Limiter=rateLimit(
    {
        windowMs:15*60*1000,
        max:300
    }
)

app.use(Limiter);

const URL="mongodb://localhost:27017/Assignmet20";

const option = {
    user:'', pass:''
};

mongoose.connect(URL,option)
    .then(()=>{
        console.log("connection established")
    })
    .catch((e)=>{
        console.log(e);
    })

app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb'}));

app.set('etag',false);
app.use('/api/sales',router);



module.exports=app;
