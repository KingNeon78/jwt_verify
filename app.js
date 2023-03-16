const express = require('express');
const app = express();
const db = require('./Database/index');
const Users = require('./view/UserRoute');
const bodyParser = require('body-parser');
const multer  = require('multer');

// parse application/json
app.use(bodyParser.json());
//multer NPM
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Uploads/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  });
  
  const upload = multer({ storage: storage });
  app.use('/uploads',express.static('uploads'));
  app.use('/api', upload.single('avatar'), Users);
// app.use("/api",Users);
app.listen(8086, ()=> {
    console.log("SERVER STARTIING>>..");
    
});
