'use strict';

let diameter = 0.5;
let thicknessOfWalls = 0.01;
let volume = 0;
let numberOfBalls = 12;

let finalDiameter = diameter + 2 * thicknessOfWalls * numberOfBalls;

for (diameter; diameter <= finalDiameter; diameter+=thicknessOfWalls*2) {
    volume+=4/3*Math.PI*((diameter/2)**3);
}

console.log(`Total volume of ${numberOfBalls} balls is ${volume} metres`);

