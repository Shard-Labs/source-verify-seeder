import { User } from "../models/User";
import { getConnection } from "typeorm";

export class UserSeed {
    private user = new User();
    private users = new Array<User>();
    constructor() {
        this.user.firstName = "Timber";
        this.user.lastName = "Saw";
        this.user.age = 25;
        this.users.push(this.user);
        this.seed(this.users);
    }

    async seed(users: User[]) {
        users.forEach( async (user) => {
            await getConnection().manager.save(user);
            // tslint:disable-next-line:no-console
            console.log("Saved a new user with id: " + user.id);
        });
    }
}
