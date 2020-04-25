var express = require('express');
var router = express.Router();

const myStorage = require('storage')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get("/trainingsList", (req, res)=>{
  res.render('trainingsList', {trainings: myStorage.getAllTrainings})
})


router.get("/", (req, res)=>{
  res.render('registration', )
})

router.post("/saveTraining", (req, res)=>{
  const{name, code, price, days}= req.body;//pobieram te pola z obiektu zadanai
  //walidacja, zapis do bazy
  const training = {name: name, code: code, price: price, days: days}

  mystorage.addTrainings(training)

  res.render('trainingView', { //odsylam do widoku saved.hbs
    title:"List of trainings",
    name,
    code,
    price,
    days

  })
})

module.exports = router;
