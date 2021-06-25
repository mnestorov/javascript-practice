/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

/**
 * Create a Backpack object.
 */
const backpack = {
	name: 'Everyday Backpack',
	volume: 30,
	color: 'grey',
	pocketNum: 15,
	strapLength: {
		left: 26,
		right: 26,
	},
	lidOpen: false,
	toggleLid: function (lidStatus) {
		this.lidOpen = lidStatus
	},
	newStrapLength: function (lengthLeft, lengthRight) {
		this.strapLength.left = lengthLeft
		this.strapLength.right = lengthRight
	},
}

console.log('The backpack object:', backpack)

console.log("Left before:", backpack.strapLength.left)

backpack.newStrapLength(10, 15)

console.log("Left After:", backpack.strapLength.left)


/**
 * Create a Car object.
 */
const car = {
	name: 'BMW',
	model: "E46",
	year: 2001,
	color: "Silver",
	changeColor: function (newColor) {
		this.color = newColor
	},
	fuel: "Gas",
	lkm: 100,
	newCar: function (name, model, year, color, fuel, lkm) {
		this.name = name
		this.model = model
		this.year = year
		this.color = color
		this.fuel = fuel
		this.lkm = lkm
	}
}

console.log('The car object:', car)