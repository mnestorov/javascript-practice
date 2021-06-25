/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

 class Car {
	constructor(
	  	// Defines parameters:
	  	name,
		model,
		color,
		year,
		newColor,
		fuel,
		lkm
	) {
		// Define properties:
		this.name = name;
		this.model = model;
		this.color = color;
		this.year = year;
		this.changeColor = {
			color: newColor
		};
		this.fuel = fuel;
		this.lkm = lkm;
	}
	// Add methods like normal functions:
	newCar(nName, nModel, nYear, nColor, nFuel, nLkm) {
		this.name = nName
		this.model = nModel
		this.year = nYear
		this.color = nColor
		this.fuel = nFuel
		this.lkm = nLkm
	}
}
  
export default Car;