import { getConnection, UpdateResult } from "typeorm";
import { User } from "../database/models/User";
import { BaseController } from "./baseController";

export class UserController implements BaseController {

    async getAll(): Promise<Array<User>> {
        return await getConnection().getRepository(User).find();
    }

    async getByID(id: number): Promise<User> {
        return await getConnection().getRepository(User).findOne(id);
    }

    async create(object: User) {
        return await getConnection().getRepository(User).save(object);
    }

    async update(id: number, object: object): Promise<UpdateResult> {
        return await getConnection().getRepository(User).update(id, object);
    }

    async delete(id: number): Promise<void> {
        const userToRemove: User = await this.getByID(id);
        await getConnection().getRepository(User).remove(userToRemove);
    }
}