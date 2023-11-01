export class User {
    readonly id?: number;
    readonly username: string;
    readonly password: string;
    readonly role : string;

    constructor(data: any){
        //
    }

    static fromPrimitives(data: any): User{
        return new User(data)
    }
}