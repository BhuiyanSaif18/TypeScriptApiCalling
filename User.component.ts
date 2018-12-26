export class User{
    Login: string;
    Full_Name: string;
    RepoCount: number;
    constructor(response: any){
        this.Login = response.login;
        this.Full_Name = response.name;
        this.RepoCount = response.public_repos;
        
    }
}