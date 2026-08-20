import fs from "node:fs";

// To create, read, update, delete or to work with directories we use fs modules

// We use it with sync, async and promises methods
// sync => one task at a time
// async => multiple work at sametime (multi tasking)
//  promises =>  to deal with callback

// 1. WRITE

// Create file if not exist and wirte in file
// fs.writeFileSync("test.txt", "Hello from sync fs!");

// 2. READ
// Read the content in file, encoding is necessary for correct output
// const data = fs.readFileSync("test.txt", "utf-8");
// console.log(data);

// 3. Append
//  To add data in new line not wver ride existing data
// fs.appendFileSync("test.txt", "\nHow are you?");
//  "\n" to; go to new line

// Create Folder
// fs.mkdirSync("myFolder/innerFolder", { recursive: true });
// { recursive: true } this make sure the "myFolder" must exist before creating "innerFolder"

// Delete
// To delete the file
// fs.unlinkSync("test.txt");

// Rename the file
// fs.renameSync("test.txt", "test1.txt");

// Copy the file
// fs.cpSync("test1.txt", "finalTest.txt");
// fs.cpSync() can also copy entire directory trees if you pass the { recursive: true }

// Delete the folder
fs.rmdirSync("myFolder", { recursive: true });
