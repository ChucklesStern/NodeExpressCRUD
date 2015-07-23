var express = require('express');
var router = express.Router();

var cars = [ {
	make: "elio",
	model: "elio1",
	year: 2016,
	cupholders: false,
	image: "http://www.eliomotors.com/wp-content/themes/eliomotors7/images/home/storyboard/possibility.jpg"
},
{
	make: "GMC",
	model: "Sierra Denali 2500",
	year: 2015,
	cupholders: true,
	image: "https://s-media-cache-ak0.pinimg.com/736x/d8/4c/87/d84c87d51ddc9ae964c0ea24fcd29f44.jpg"
},
{
	make: "Honda",
	model: "CRV",
	year: 2017,
	cupholders: false,
	image: "http://automobiles.honda.com/images/2015/cr-v/configurations/base-cars/374x234/SI_lx2wd_34FRONT.jpg"
}
];

var newCar = {};

router.get('/cars',function(req,res){
	res.send(cars);
});

router.post('/cars',function(req,res){
	anything = req.body.cars;
	res.send(anything);
	console.log(req.body.cars);
	cars.push(req.body.cars);
	


});




module.exports = router;


