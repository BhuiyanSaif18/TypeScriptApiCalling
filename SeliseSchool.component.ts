import { User } from './User.component';
import { Repos } from './Repos.component';
import { SeliseSchoolServices } from './SeliseSchool.services';

let val = new SeliseSchoolServices();
val.getUserInfo('saif-lesnar',(user: User) => {
    console.log('Name: '+user.Full_Name);
    console.log('Number of Repo: '+user.RepoCount);
    console.log('User Name: '+user.Login);
});
val.getRepoInfo('saif-lesnar',(repo: Repos[]) => {
    for(let i in repo){
        console.log('Repo '+i+' '+repo[i].name);
    }
});