import{Injectable} from '@angular/core';
import{Member} from './member';

@Injectable()
export class MembersService{
    getMembers():Promise<Member[]>{
        return Promise.resolve(Member.members);
    }
    

}   