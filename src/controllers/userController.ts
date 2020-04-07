import { getConnection } from "typeorm";
import { User } from "../database/models/User";
import { BaseController } from "./baseController";

export class UserController implements BaseController {

    async getAll() {
        return await getConnection().getRepository(User).find();;
    }

    async getByID(id: any) {
        return await getConnection().getRepository(User).findOne(id);
    }

    async create(object: object) {
        return await getConnection().getRepository(User).save(object);
    }

    async update(id: string, object: object) {
        return await getConnection().getRepository(User).update(id, object);
    }

    async delete(id: any) {
        const userToRemove = await this.getByID(id);
        await getConnection().getRepository(User).remove(userToRemove);
    }
}