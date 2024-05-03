const express = require('express')
const signUpCtrl = require('../controller/userSignUpController')
const app = express()

app.post('/signup',signUpCtrl.signupCtrl)

