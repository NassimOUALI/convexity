const xv = 25,
	yv = 25;

function setup() {
	// Create a canvas of width 400 and height 400
	let canvas = createCanvas(500, 500);

	// Attach the canvas to a specific container by its ID
	canvas.parent('canvas-container');
}

function draw() {
	background(200);
	noFill()
	stroke(0);
	graphAxis();
	equation(select("#eq").value());

}

function graphAxis() {
	stroke(0); // Red stroke for the curve
	strokeWeight(1);
	line(width / 2, 0, width / 2, height);
	line(0, height / 2, width, height / 2);
	var x = Math.floor(width / xv);
	var y = Math.floor(height / yv);

	for (var i = 0; i < x; i++) {
		line(i * xv, 0, i * xv, height);
	}
	for (var j = 0; j < x; j++) {
		line(0, j * yv, width, j * yv);
	}
	rect(0, 0, width - 1, height - 1)
}


function equation(str) {

	// Get user inputs for a and b
	let a, b, lambda;
	try {
		a = parseFloat(document.querySelector("#a").value);
		b = parseFloat(document.querySelector("#b").value);
		lambda = parseFloat(document.querySelector("#lambda").value); // Correctly get the value of #lambda
	} catch (e) {
		console.error("Error parsing inputs:", e);
	}

	push();
	stroke(255, 0, 0); // Red stroke for the curve
	strokeWeight(4);
	translate(width / 2, height / 2); // Move origin to the center
	let w = width / xv / 2;

	beginShape();
	for (let i = -w; i < w; i += 0.01) {
		try {
			// Calculate y based on the expression
			let y = eval(str.replaceAll("x", i));
			// Use scaled coordinates for the curve
			curveVertex(i * xv, -y * yv);
		} catch (e) {
			console.error("Error in the equation evaluation:", e);
			break;
		}
	}
	endShape();
	pop();

	// Calculate corresponding y-values using the same equation
	let y1, y2;
	try {
		y1 = eval(str.replaceAll("x", a));
		y2 = eval(str.replaceAll("x", b));
	} catch (e) {
		console.error("Error evaluating the equation for y-values:", e);
	}

	// Transform the line coordinates just like the curve
	try {
		push();
		stroke(0, 0, 255); // Blue stroke for the line
		strokeWeight(3);
		translate(width / 2, height / 2); // Move origin to center again
		line(a * xv, -y1 * yv, b * xv, -y2 * yv); // Draw the line between points
		pop();
	} catch (e) {
		console.error("Error drawing the line:", e);
	}
	// Calculate and draw the first circle
	try {
		push();
		stroke(0, 0, 255); // Blue stroke for the circle
		strokeWeight(3);
		translate(width / 2, height / 2); // Move origin to center again

		// Calculate the x and y coordinates based on lambda
		let xCoord = lambda * a + (1 - lambda) * b; // x position based on lambda
		let yCoord = eval(str.replaceAll("x", xCoord)); // Calculate y position using the equation

		// Draw circle at the computed position
		circle(xCoord * xv, -yCoord * yv, 3);
		pop();
	} catch (e) {
		console.error("Error drawing the first circle:", e);
	}

	// Calculate and draw the second circle
	try {
		push();
		stroke(255, 0, 0); // Red stroke for the circle
		strokeWeight(3);
		translate(width / 2, height / 2); // Move origin to center again

		// Calculate the x and y coordinates based on lambda
		let xCoord2 = lambda * a + (1 - lambda) * b; // x position based on lambda
		let yCoord2 = lambda * eval(str.replaceAll("x", a)) + (1 - lambda) * eval(str.replaceAll("x", b)); // y position based on linear interpolation

		// Draw circle at the computed position
		circle(xCoord2 * xv, -yCoord2 * yv, 3);
		pop();
	} catch (e) {
		console.error("Error drawing the second circle:", e);
	}

}

