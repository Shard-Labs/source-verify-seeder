import { MetadataSeed } from "./database/seeds/MetadataSeed";
import "reflect-metadata";
import { createConnection } from "typeorm";
import readline from "readline";
import path from "path";
import dotenv from "dotenv";
const lineByLine = require('n-readlines');

dotenv.config();

const liner = new lineByLine(path.resolve(__dirname, '..', process.env.FILENAME))
// const inputLines: string[] = []

// const rl = readline.createInterface({
//     input: fs.createReadStream(path.resolve(__dirname, process.env.FILENAME))
// });

async function fileParser() {
    let lines: string[] = [];
    let line;
    while(line = liner.next()){
        if(lines.length > 50000){
            await Promise.all(MetadataSeed(lines)).then((result) => {
                lines = [];
            });
        }
        lines.push(line.toString('ascii'))
    }
}

createConnection().then(async connection => {
    fileParser();
}).catch(error => console.log(error));
