import { Metadata } from "../models/Metadata";
import { getConnection } from "typeorm";

export function MetadataSeed(lines: string[]): any[] {
    const promises: any = [];
    lines.forEach((line) => {
        // TODO:
        const metadata = new Metadata();
        metadata.address = line;
        metadata.creationBytecode = line;
        metadata.chainId = Number(line);
        metadata.blockNumber = Number(line);
        metadata.deployedCodeHash = line;
        promises.push(getConnection().manager.save(metadata));
    });
    return promises;
}
