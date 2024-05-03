const express = require("express");
const bodyParser = require("body-parser");
const signUpCtrl = require('./controller/userSignUpController')


// require("./routes");

const app = express();
const port = 8080;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post('/signup',signUpCtrl.signupCtrl)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// connecting mysql database
// Connect()
