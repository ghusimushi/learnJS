(function() {
	'use strict';

	// this
	var generate = {
		name: "Abdullah",
		age: 21,
		location: "Sylhet",
		nameLocation: function() {
			return "Name: " + this.name + " and Location: " + this.location;
		}
	}

	console.log(generate.nameLocation());

	generate.name = "Abdur Razzak Chowdhury";
	generate["location"] = "Syria";
	console.log(generate.nameLocation());

	// comprehensions
	var fruits = ["mango","litchi","apple"];
	var newFruits = [for (elements of fruits) elements.toUpperCase()];
	console.log(newFruits);

	// new
	function Car() {};
	Car.prototype.color = null;		// if you want to define default prototype

	var car1 = new Car();
	car1.color = "black";
	var car2 = new Car();
	car2.color = "red";
	console.log(car1.color);
	console.log(car2.color);

	function Cars(name,model,year) {
		this.name = name;
		this.model = model;
		this.year = year;

	}
	var car1 = new Cars("Audi","56V",2005);
	console.log(car1);
	console.log(car1.name);

	// pure awesomeness with this example
	function Person(name, age, sex) {
	  this.name = name;
	  this.age = age;
	  this.sex = sex;
	}
	var rand = new Person("Rand McNally", 33, "M");
	var ken = new Person("Ken Jones", 39, "M");
	function Car(make, model, year, owner) {
	  this.make = make;
	  this.model = model;
	  this.year = year;
	  this.owner = owner;
	}
	var car1 = new Car("Eagle", "Talon TSi", 1993, rand);
	var car2 = new Car("Nissan", "300ZX", 1992, ken);
	console.log(car2.owner.name);

	// spread operator
	var parts = ['shoulder', 'knees'];
	var lyrics = ['head', ...parts, 'and', 'toes'];
	console.log(lyrics);

}());