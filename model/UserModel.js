const mongoose = require('mongoose');

const user = mongoose.Schema({

    name : { type:String , required:true },
    email : { type:String , required:true },
    password: { type:String , required:true },
    role: { type:String , required:true },
    // location:{ 
    //     type:{type: String},
    //     coordinates: [],
    // },
    coverPhoto:{ type:Object,},
});

user.index({location: '2dsphere'});
module.exports = mongoose.model('user',user);