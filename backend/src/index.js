const express = require("express")
const cors = require("cors");
const questionController = require("./controllers/QuestionController");
const answerController = require("./controllers/AnswersController");
const { register, login } = require("./controllers/AuthController");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", register);
app.post("/login", login);

app.get("", (req, res) => {
  try {
    return res.send("Welcome QandA -backend");
  } catch (err) {
    console.log(err);
  }
});

app.use("/", questionController);
app.use("/",answerController);

module.exports = app;
