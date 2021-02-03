const fs = require('fs').promises; //promise based fs module
const util = require('util') //generate a promised based wrapper for 
//old style callback functions

 async function listFiles() { 
    try {
        const files = await fs.readdir('.'); //await the results of the promise based call
        //const readFile = await fs.readFile
    for (const file of files) { //the for of loop works well with files
        console.log(file);
        }
    } catch (err) {
        console.error(err);
    }
}
listFiles();
