const express = require('express');

const app = express();

var port = process.env.PORT || 8080;

var router = express.Router();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// the first letter in both words need to be the same: avacdo-armchair

const fruits = ["Apple", "Avocado", "Banana", "Blueberry", "Cherry", "Grapefruit", "Guava", "Kiwi", "Mango", "Lime", "Peach", "Pomegranate", "Pineapple", "Tangerine"]
const furnitures = ["Chair", "Armchair", "Bed", "Sofa", "Desk", "Piano", "Table", "Lamp", "Bookcase", "Closet", "Drawer", "Shelf", "Pillow", "Television", "Mirror"]

router.get('/', function(req, res) {
    res.json("Why is tomato a fruit and not cucumber?");   
});

router.route('/fry')
  .get((req, res) => {
    res.json(fruits);   
  })

router.route('/kea')
  .get((req, res) => {
    res.json(furnitures);   
  })


app.use('/api', router); // API Root url at: http://localhost:8080/api


app.listen(port);
console.log('Server listenning on port ' + port);