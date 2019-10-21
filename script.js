let name = "Tyler Weiss";
let age = 27;
let birthday = "April 3";
let detroitGC = true;
let lifeEvents = [
  "i was born in Ann Arbor, Michigan.",
  "I went to Eastern Michigan University.",
  "I got 7th place in state bowling tournement",
  "I am married."
];

if (detroitGC) {
  console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan.
I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
  console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan.
I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random(0) * 10) + 1;
  console.log(randomNumber);
  if (randomNumber !== 5) {
    counter++;
    console.log(`randomNumber !== 5`);
  } else {
    counter++;
    console.log(
      `it took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}
