export class  Login<T> {
    username: string;
    password: string;
    process: T | undefined;

    constructor(_username: string, _password: string) {
        this.username = _username;
        this.password = _password;
    }
}