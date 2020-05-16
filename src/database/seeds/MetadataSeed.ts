import { Metadata } from "../entity/Metadata";
import { getConnection } from "typeorm";


export function splitLine(line: string): Metadata {
    const lineSplitted: string[] = line.split(' ');

    const metadata = new Metadata();
    metadata.address = lineSplitted[0];
    metadata.creationBytecode = new Buffer(lineSplitted[1]);
    metadata.chainId = Number(process.env.CHAIN_ID);
    //metadata.blockNumber = 2;
    metadata.deployedCodeHash = lineSplitted[1];
    return metadata
}

export function MetadataSeed(lines: string[]) {
    const promises: any = [];
    for(const line in lines){
        const metadata = splitLine(lines[line]);
        promises.push(getConnection().manager.save(metadata));
    }
    return promises;
}
