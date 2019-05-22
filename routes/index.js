var express = require('express');
var router = express.Router();

var Quiz=require('../models/Quiz')
/* GET home page. */
// router.post('/quiz', function(req, res, next) {
//   Quiz.create(req.body)
//   .then(res=>{
//     res.json(req.body)
//   })
//   .catch((err) => {throw err})
// });


router.get('/',(req,res)=>{
  res.json("Working")
})

router.post('/create',(req,res)=>{
  console.log(req.body.data)
 Quiz.create(req.body.data)
  res.send(req.body.data) 
})
router.get('/allquestions',(req,res)=>{
  Quiz.find({})
  .then((data)=>
    res.send(data))
  .catch(err=>res.send(err  ))
})

router.get('/:category',(req,res)=>{
  Quiz.find({category:req.params.category})
  .then((data)=>res.send(data))
  .catch(err=>res.send(err  ))
  
})


module.exports = router;
