import { User } from "../User";

export interface IUsersRepository {
    create(data: User): Promise<User>
}