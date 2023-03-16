const router = require("express").Router();

const {UserRegistration,UpdateRegistration}= require('../controler/UserControler');
const {VerifyToken} = require('../middleware/index');
router.post("/UserRegistration",UserRegistration);
router.post("/UpdateRegistration",VerifyToken,UpdateRegistration);

module.exports = router;