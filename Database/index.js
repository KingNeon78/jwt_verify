const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/nodejsaaaa')
  .then(() => console.log('DataBase Connected SuccessFully !')).catch((error)=>{
    console.log("error",error);

  });