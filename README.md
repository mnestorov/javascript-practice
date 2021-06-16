# JavaScript Building Objects

Practice of building JavaScript objects.

## What is JavaScript object

JavaScript is an object-based language - everything is an object in JS. A JavaScript object is an entity having state and behavior - properties and methods). 

**For example:** car, pen, bike, chair, glass, keyboard, monitor etc. 

Object property stores a literal value and method represents function. An object can be created using object literal or object constructor syntax.

## Examples

### Change the color of the car in a car object

```javascript
car.changeColor('Red') // change the color property of the car object
car.color // see the new color property of the car object
```

### Create a new car object based on initial/main car object

```javascript
var myNewCar = car.newCar('BMW', 'F10', 2010, 'Black', 'Gas', 100)
myNewCar // see the new car object
myNewCar = car.color // see the new car color property
```