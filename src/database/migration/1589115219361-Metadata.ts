import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class Metadata1589115219361 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

        await queryRunner.createTable(new Table({
            name: "metadata",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: "uuid",
                    default: `uuid_generate_v4()`
                },
                {
                    name: "address",
                    type: "text",
                    isNullable: false,
                },
                {
                    name: "creationBytecode",
                    type: "bytea",
                    isNullable: false
                },
                {
                    name: "chainId",
                    type: "integer",
                    isNullable: false
                },
                {
                    name: "blockNumber",
                    type: "integer",
                    isNullable: true
                },
                {
                    name: "deployedCodeHash",
                    type: "bytea",
                    isNullable: false
                }
            ]
        }), true);

        await queryRunner.createIndex("metadata", new TableIndex({
            name: "chainIdAddress_idx",
            columnNames: ["address", "chainId"]
        }));

        await queryRunner.createIndex("metadata", new TableIndex({
            name: "address_idx",
            columnNames: ["address"]
        }));

        // await queryRunner.createIndex("metadata", new TableIndex({
        //     name: "chainCHCB_idx",
        //     columnNames: ["chainId", "deployedCodeHash", "creationBytecode"]
        // }));

        // await queryRunner.createIndex("metadata", new TableIndex({
        //     name: "addrDCHCrtBtcode_idx",
        //     columnNames: ["address", "deployedCodeHash", "creationBytecode"]
        // }));

        await queryRunner.createIndex("metadata", new TableIndex({
            name: "addressChainId_idx",
            columnNames: ["address", "chainId"]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
