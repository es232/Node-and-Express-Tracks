// console.log("Node is running!");

//ex2
// const add = (a, b) => {
//     return a + b;
// };

// const subtract = (a, b) => {
//     return a - b;
// };

// module.exports = {
//     add,
//     subtract
// };

//es mod
// export const add = (a, b) => {
//     return a + b;
// };

// export const subtract = (a, b) => {
//     return a - b;
// };

// const name = process.argv[2];
// const age = process.argv[3];
// const country = process.argv[4];

// console.log(name);
// console.log(age);
// console.log(country);
//node app.js El 21 India

//emitter 
//import { EventEmitter } from "node:events";

// const emitter = new EventEmitter();

// emitter.on("login", () => {
//     console.log("User logged in!");
// });

// emitter.emit("login");
// emitter.on("userRegistered", (name, email) => {
//     console.log(`Name: ${name}`);
//     console.log(`Email: ${email}`);
// });

// emitter.emit(
//     "userRegistered",
//     "Esakkiammal",
//     "user@example.com"
// );

// import { EventEmitter } from "node:events";

// const app = new EventEmitter();

// app.on("userRegistered", (username) => {
//     console.log(`Welcome ${username}!`);
// });

// app.on("userRegistered", (username) => {
//     console.log(`Creating profile for ${username}...`);
// });

// app.on("userRegistered", (username) => {
//     console.log(`Sending welcome email to ${username}...`);
// });

// console.log("Registering user...");

// app.emit("userRegistered", "Esakkiammal");

// console.log("Registration process finished.");

// const text = "Node.js is powerful";

// const buffer = Buffer.from(text);

// console.log("Original:");
// console.log(text);

// console.log("\nBuffer:");
// console.log(buffer);

// console.log("\nLength:");
// console.log(buffer.length);

// console.log("\nBack to text:");
// console.log(buffer.toString());

// console.log("\nHex:");
// console.log(buffer.toString("hex"));

// console.log("\nBase64:");
// console.log(buffer.toString("base64"));


//streams

import fs from "node:fs";

const stream = fs.createWriteStream("output.txt");

stream.write("Hello\n");
stream.write("Learning Node.js\n");
stream.write("Learning Streams\n");

stream.end();