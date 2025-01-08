'use strict';

let thicknessOfWalls = 0.01;
let diameter = 0.5-2*thicknessOfWalls;
let volume = 0;
let numberOfBalls = 12;

for (let i=0; i<12; i++) {
    volume+=4/3*Math.PI*((diameter/2)**3);
    diameter+=thicknessOfWalls*2;  
}

console.log(`Total volume of ${numberOfBalls} balls is ${volume} metres`);

