const express = require("express");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();

const answer = require("../models/Answers");

router.post("/answers",authenticate,async(req,res)=>{
    try {
        const newAnswer = answer.create({
            answer: req.body.answer,
            questionId: req.body.questionId,
            user: req.user,
          });
    
          return res.status(200).send({
            status:true,
            answer:newAnswer
          })
    } catch (error) {
        return res.status(500).send({
            message:error
        })
    }
    
})

module.exports = router;