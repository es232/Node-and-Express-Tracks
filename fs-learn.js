// import fs from "node:fs";

// fs.writeFileSync(
//     "hello.txt",
//     "I changed this file!"
// );

// console.log("File created!");

// import fs from "node:fs";

// const files = fs.readdirSync(".");

// console.log("Files and folders:");

// for (const file of files) {
//     console.log("-", file);
// }

import os from "node:os";

const totalMemory =
  os.totalmem() / (1024 ** 3);

const freeMemory =
  os.freemem() / (1024 ** 3);

console.log("===== SYSTEM INFORMATION =====");

console.log(`OS: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Hostname: ${os.hostname()}`);
console.log(`Home Directory: ${os.homedir()}`);
console.log(`Temporary Directory: ${os.tmpdir()}`);
console.log(`Total Memory: ${totalMemory.toFixed(2)} GB`);
console.log(`Free Memory: ${freeMemory.toFixed(2)} GB`);