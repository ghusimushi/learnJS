(function() {
	'use strict';	// prevent code from being global

	// Bitwise operator converts any decimal,hexadecimal,octal numbers to binary with 32 bits representation

	console.log(15 & 9);	// result: 9; 1111 & 1001 = 1001 (9)
	console.log(15 | 9);	// result: 15; 1111 | 1001 = 1111 (15)
	console.log(15 ^ 9);	// result: 9; 1111 ^ 1001 = 0110 (6)
	console.log(~15);		// result: -16; 00000000000000000000000000001111 <- 32 bit and invert to like	 11111111111111111111111111110000

	// Bitwise shift operator

	console.log(15<<2);		// result: 60; 1111 (note: there are 28 0's before them) shifted 2 means 111100
	console.log(15>>2);		// result: 3; 1111 (note: there are no 0's after them) shifted 2 in the right means 11

}());