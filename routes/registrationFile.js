var express = require('express');
var router = express.Router();
const myStorage = require('./storage')


router.get("/registrationFile", (req, res)=>{
  res.render('registrationFile', {trainings: myStorage.getAllTrainings})
})

router.post("/saveTraining", (req, res)=>{
    const{name, code, price, days}= req.body;//pobieram te pola z obiektu zadanai
    //walidacja, zapis do bazy
    const training = {name: name, code: code, price: price, days: days}
  
    myStorage.addTrainings(training)
  
    res.render('trainingsView', { //odsylam do widoku saved.hbs
      title:"List of trainings",
      name,
      code,
      price,
      days
  
    })
  })

module.exports = router;
