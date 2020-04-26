var express = require('express');
var router = express.Router();
// const myStorage = require('./storage')

// const myStorage = require('./storage')

router.get('/', async (req, res)=>{
    try{
        const trainings = await Training.find() //find wyszukuje elementy w kolekcji (tab) wg podanych kryteriow lub wszystkie jesli bark kryteriow
        res.json(trainings) //zwracamy wynik jako JSON
    } catch(error){
        res.status(500).json({message:error.message})
    }
})

// router.get("/", (req, res)=>{
//     // console.log(myStorage.getAllTrainings)
//     res.render('trainingsView', {
//         trainings: myStorage.getAllTrainings()})
// }) //??

// router.post('/trainingsView', (req, res)=>{
//     const{name, code, price, days}= req.body;//pobieram te pola z obiektu zadanai
//     //walidacja, zapis do bazy
//     // const training = {name: name, code: code, price: price, days: days}
  
//     myStorage.addTrainings(training)
  
//     res.render('trainingsView', { //odsylam do widoku saved.hbs
//       title:"List of trainings",
//       name,
//       code,
//       price,
//       days
  
//     })
//   })

module.exports = router;