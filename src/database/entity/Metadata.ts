import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Metadata {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        nullable: false
    })
    address: string;

    @Column({
        type: 'bytea',
        nullable: false
    })
    creationBytecode: Buffer;

    @Column({
        nullable: false
    })
    chainId: number;

    @Column({
        nullable: false
    })
    blockNumber: number;

    @Column({
        type: 'bytea',
        nullable: false
    })
    deployedCodeHash: string;

}

