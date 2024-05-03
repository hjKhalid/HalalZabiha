// const { message } = require("statuses");
// const first = require("ee-first");
const db = require("../models");
const SignUp = db.signUp;

const signupCtrl= async(req,res)=>{
    // console.log(req.body);
    try {
        const {firstName,lastName,email,password,confirmPassword}= req.body;
        console.log(encodeURIComponent(password));
        const userData = {firstName:firstName,lastName:lastName,email:email,password:encodeURIComponent(password),confirmPassword:encodeURIComponent(confirmPassword)};
        console.log(userData);
        const data =  SignUp.build(userData);
         await data.save();
        res.status(200).json({data:data})
    } catch (error) {
        res.status(400).json({message:{errorcode:"SIN001"}})
    }

}

module.exports={
    signupCtrl
}