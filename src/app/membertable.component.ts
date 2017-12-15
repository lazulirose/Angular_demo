import { Component } from '@angular/core';
import { Member } from './member';

@Component({
  selector: 'membertable',
  templateUrl: './membertable.component.html',
  styleUrls: ['./membertable.component.css']
})

export class MembertableComponent  { 
		members=Member.members;
		selectedMember:Member[];
		constructor(){this.selectedMembers = new Array();};
		onSelect(member:Member){
        let selectedindex = this.isSelected(member);
         if (selectedindex >=0) {
            this.selectedMembers.splice(selectedindex, 1);
         }
        else {
            this.selectedMembers.push(member);  
        }
    }
		isSelected(themember:Member):number{
		for (let i=0; i<this.selectedMembers.length; i++) {
		if (this.selectedMembers[i]==themember) {
				return i;
				}
			}
		}
		return -1;
	}
}