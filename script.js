/**
 * Practice: Building classes
 *
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";
import Car from "./Car.js";

const everydayPack = new Backpack(
	"Everyday Backpack",
	30,
	"grey",
	15,
	26,
	26,
	false
);
 
console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);


const newCar = new Car(
	"BMW",
	"E46",
	"Silver",
	2001,
	"Black",
	"Gas",
	100
);
 
console.log("The Car object:", newCar);
console.log("The model value:", newCar.model);