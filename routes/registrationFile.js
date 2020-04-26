var express = require('express');
var router = express.Router();
const myStorage = require('./storage')

// const myStorage = require('./storage')

router.get("/", (req, res)=>{
  res.render('registrationFile', {title: 'course registration'})
}) //??

router.post('/saveTraining', (req, res)=>{ ///!!!!
    const{name, code, price, days}= req.body;//pobieram te pola z obiektu zadanai
    //walidacja, zapis do bazy
    const training = {name: name, code: code, price: price, days: days}
  
    myStorage.addTrainings(training)
  
    res.render('trainingsView', { //odsylam do widoku saved.hbs
      training
  
    })
  })

module.exports = router;
