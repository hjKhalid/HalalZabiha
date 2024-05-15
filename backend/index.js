const express = require("express");
const bodyParser = require("body-parser");
const signUpCtrl = require('./controller/userSignUpController')
const cookies = require("cookie-parser")


// require("./routes");

const app = express();
const port = 8080;
app.use(bodyParser.json());
app.use(cookies())

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post('/signup',signUpCtrl.signupCtrl)
app.post('/login',signUpCtrl.signCtrl)
app.get("/logout",signUpCtrl.logoutCtrl)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

