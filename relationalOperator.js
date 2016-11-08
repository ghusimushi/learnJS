(function() {
	'use strict';	// prevent code from being global

	/* in */

	var fruits = ["mango","litchi","apple"];

	console.log(0 in fruits);		// true; array[0] exist
	console.log("mango" in fruits);	// false; only index number value allowed for array
	console.log("length" in fruits);		// true; length is a property of array
	console.log(length in fruits);

	// Custom objects
	var mycar = { make: "Honda", model: "Accord", year: 1998 };

	console.log("make" in mycar);  // returns true
	console.log("model" in mycar); // returns true

	/* instanceof (normally used to determine the type of an object) */
	var theDay = new Date(1995,10,14);

	console.log(theDay instanceof Date);


}());