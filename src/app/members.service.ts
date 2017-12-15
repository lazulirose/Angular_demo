import{Injectable} from '@angular/core';
import{Member} from './member';
import{Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MembersService{

    private membersUrl = "api/memberdata";
    private headers = new Headers(
        {'Content-Type': 'application/json'}
    );

    constructor(private http: Http){}

    getMembers(): Promise<Member[]>{
        return this.http.get(this.membersUrl)
        .toPromise()
        .then(response =>response.json().data as Member[])
        .catch(this.handleError);
    }

    addVotes(selectedMembers:any):Promise<string>{

       let promises :Promise<any>[] = [];
       for (let selectedMember of selectedMembers){
        promises.push(
            this.updateMember(selectedMember)
        );
        
       }
      return  Promise.all(promises).then(()=>"御投票ありがとうございました");
    }

    updateMember(member:Member):Promise<boolean>{
        let idUrl = `${this.membersUrl}/${member.id}`;
        return this.http.put(idUrl,JSON.stringify(member),
            {headers:this.headers})
            .toPromise().then(()=>true)
           .catch(this.handleError);
    }

    

    private handleError(error:any): Promise<any>{
        return Promise.reject(error.message || error);

    }

} 