// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

// Part 1: Add the 5 variables here
let spacecraftName: string = 'Determination';
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Code part 2 here:

//Miles
let milesToMars: number = kilometersToMars * milesPerKilometer;

//Hours
let hoursToMars: number = milesToMars/speedMph;

//Days
let daysToMars: number = hoursToMars/24;

// Code the output statement here (use a template literal):
console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars`);

