function showroom (make, model, year, cupholders, image, id) {
	this.make = make,
	this.model = model,
	this.year = year,
	this.cupholders = cupholders,
	this.image = image,
	this.id = id || null;
}

module.exports = showroom;