import { MetadataSeed } from "./database/seeds/metadataSeed";
import "reflect-metadata";
import { createConnection } from "typeorm";
import readline from "readline";
import path from "path";
import dotenv from "dotenv";
const lineByLine = require('n-readlines');

dotenv.config();

const liner = new lineByLine(path.resolve(__dirname, process.env.FILENAME))
const inputLines: string[] = []

// const rl = readline.createInterface({
//     input: fs.createReadStream(path.resolve(__dirname, process.env.FILENAME))
// });

function fileParser() {
    let lines: string[] = [];
    let line;
    while(line = liner.next()){
        lines.push(line)
        if(lines.length > 100){
            Promise.all(MetadataSeed(lines)).then((result) => {
                lines = [];
            });
        }
    }
}

createConnection().then(async connection => {
    fileParser();
}).catch(error => console.log(error));
