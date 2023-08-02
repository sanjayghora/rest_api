const mongoose = require('mongoose');



    mongoose.connect("mongodb://127.0.0.1:27017/olinpics",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("connection established");
    }).catch((e)=>{
        console.log("connection failed");
    })


    //bR8CJvCT3LN9GeoT
   //sanjay200
   //mongodb+srv://sanjay200:bR8CJvCT3LN9GeoT@cluster0.v4g0jvh.mongodb.net/?retryWrites=true&w=majority