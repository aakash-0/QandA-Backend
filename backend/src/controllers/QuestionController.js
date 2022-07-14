const express = require("express");
const question = require("../models/Question");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();


router.post("/question",authenticate,async (req,res)=>{
    try {
        const newQuestion = await question.create({
            
                questionName: req.body.questionName,
                questionUrl: req.body.questionUrl,
                user: req.user,
              
        }) 

        return res.status(200).send({
                status:true,
                question:newQuestion
        })

    } catch (error) {
        return res.status(500).send({
            message:error
        })
    }
})
router.get("/question",async(req,res)=>{
    try {
        const newQuestion = await question.aggregate([
            {
              $lookup: {
                from: "answers", //collection to join
                localField: "_id", //field from input document
                foreignField: "questionId",
                as: "allAnswers", //output array field
              },
            },
          ])
          .exec();

          return res.status(200).send({
            status:true,
            question:newQuestion
          })
    } catch (error) {
        return res.status(500).send({
            message:error
        })
    }
})

module.exports = router;