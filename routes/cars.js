var express = require('express');
var router = express.Router();
var Car = require('../models/showroom');

var cars = [ {
	make: "elio",
	model: "elio1",
	year: 2016,
	cupholders: false,
	image: "http://www.eliomotors.com/wp-content/themes/eliomotors7/images/home/storyboard/possibility.jpg",
	id: 0
},
{
	make: "GMC",
	model: "Sierra Denali 2500",
	year: 2015,
	cupholders: true,
	image: "https://s-media-cache-ak0.pinimg.com/736x/d8/4c/87/d84c87d51ddc9ae964c0ea24fcd29f44.jpg",
	id: 1
},
{
	make: "Honda",
	model: "CRV",
	year: 2017,
	cupholders: false,
	image: "http://automobiles.honda.com/images/2015/cr-v/configurations/base-cars/374x234/SI_lx2wd_34FRONT.jpg",
	id: 2
}
];

var newCar = {};

router.get('/cars', function(req, res) {
	if(req.query.search) {
		console.log(req.query);
	}
	res.send(cars);
})

router.get('/:id',function(req,res){
	var index = findCarIndex(req.params.id);

	if (index === null) res.status(400).send();
	else res.send(cars[index]);



	//res.send(cars);
});

router.post('/cars',function(req,res){
	var auto = req.body;
	var newAuto = new Car(auto.make, auto.model, auto.year, auto.cupholders, auto.image);
	newAuto.id = cars[cars.length - 1].id +1;
	console.log(newAuto);
	cars.push(newAuto);
	res.send({id: newAuto.id});
});

router.put('/:id', function(req, res) {
	var auto = req.body;
	var index = findCarIndex(req.params.id);
	if(index !== null) {
		var newAuto = new Car(auto.make, auto.model, auto.year, auto.cupholders, auto.image);
		newAuto.id = index;
		cars[index] = newAuto;
		res.send("success");
	}
	else res.status(400).send('Could not find the hero to edit');
});

router.delete('/:id', function(req,res) {
	var index = findCarIndex(req.params.id);
	console.log(index);
	console.log(req.params.id);
	if(index !== null) {
		cars.splice(index, 1);
		res.send();
	}
	else {
		res.status(400).send("Invalid Id");
	}
});

function findCarIndex(id) {
	for (var i = 0; i < cars.length; i++)
			//little bit of regex to parse string for int
		{	var val = id.match(/\d+/g);
			if( cars[i].id == val) {
				return i;
		//	console.log(i);
	}

}
return null;
}




module.exports = router;


