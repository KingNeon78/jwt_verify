const UserModel = require('../model/UserModel');
const jwt = require('jsonwebtoken');
const UserRegistration = async (req,res)=>{
try {
    console.log("gulam ",req.body);
    // console.log("Gulam Jilani User Model CHl RHA HAI ",req.body);
   const {name,email,password,lat,long,role}= req.body;
   const newUser = new UserModel({
        name:name,
        email:email,
        password:password,
        role:'1',
        // location: {
        //     type:'point',
        //     coordinates:[parseFloat(lat),parseFloat(long)],
        // },
        coverPhoto: req.file.path,
    });
    const Token = jwt.sign({
        id:newUser._id
      }, 
      'secret',
     { expiresIn: '1h' });

//  console.log('newUser',Token);
//  return;
 const SavedUser = await newUser.save();
 let result = {
  UserDetail:SavedUser,
  token: Token
 };
 res.send(result);
    
} catch (error) {
    console.log('error',error);
    res.send(error);
}
};
const UpdateRegistration = async(req,res)=>{
    try {
        const {name} = req.body;
        await UserModel.findByIdAndUpdate(
            { _id:req.user.id       },
            {
                name:'cetpa',
            }
     );
     res.send("name Updated Successfully");
    } catch (error) {
        console.log(error);
        res.send(error);
    }

};

module.exports = {
    UserRegistration,
    UpdateRegistration
}