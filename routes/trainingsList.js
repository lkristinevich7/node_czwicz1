var express = require('express');
var router = express.Router();
const myStorage = require('storage')

router.get("/", (req, res)=>{
    res.render('saveTraining', {})
  })
  
  router.post("/saveTraining", (req, res)=>{
    const{name, code, price, days}= req.body;//pobieram te pola z obiektu zadanai
    //walidacja, zapis do bazy
    res.render('trainingList', { //odsylam do widoku saved.hbs
      title:"List of trainings",
      name,
      code,
      price,
      days
  
    })
  })

module.exports = router;
