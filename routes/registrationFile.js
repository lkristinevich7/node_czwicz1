var express = require('express');
var router = express.Router();
const myStorage = require('./storage')

// const myStorage = require('./storage')

// router.get("/", (req, res)=>{
//   res.render('registrationFile', {title: 'course registration'})
// }) //??

const Training = require('../models/training') //model Car udostepnia operacja bazadanowe

router.get('/', async (req, res)=>{
    try{
        const trainings = await Training.find() //find wyszukuje elementy w kolekcji (tab) wg podanych kryteriow lub wszystkie jesli bark kryteriow
        res.json(trainings) //zwracamy wynik jako JSON
    } catch(error){
        res.status(500).json({message:error.message})
    }
})


router.post('/saveTraining', async (req, res)=>{
  const training = new Training({ //otworzeniu rekordu car w celu zapisania do bazy
      name: req.body.name,
      code: req.body.code,
      price: req.body.price,
      days: req.body.days
  })
  //zapis i odeslanie wyniku
  try{
      const newTraining = await training.save()
      res.status(201).json(newTraining)
  }
  catch(error){
      res.status(400).json({message: error.message})//400-bad request
  }
})

//po zatwierdzeniu 
// router.post('/saveTraining', (req, res)=>{ ///!!!!
//     const{name, code, price, days}= req.body;//pobieram te pola z obiektu zadanai
//     //walidacja, zapis do bazy
//     const training = {name: name, code: code, price: price, days: days}
  
//     myStorage.addTrainings(training)
  
//     res.render('trainingsView', { //odsylam do widoku saved.hbs
//       trainings: myStorage.getAllTrainings()
  
//     })
//   })

module.exports = router;
