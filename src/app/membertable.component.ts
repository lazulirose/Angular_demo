import { Component } from '@angular/core';
import { Member } from './member';

@Component({
  selector: 'membertable',
  templateUrl: './membertable.component.html',
  styleUrls: ['./membertable.component.css']
})
export class MembertableComponent  { 
    members = Member.members;
    selectedMembers: Member[];
    overflow: boolean;
    whoisselected: string;

    constructor() {
        this.selectedMembers = new Array()
        this.overflow = false;
        this.whoisselected = "";

    };

    onSelect(member: Member) {
        let selectedindex = this.isSelected(member);
        if (selectedindex >= 0) {
            this.selectedMembers.splice(selectedindex, 1);
            this.overflow = false;
        } else if (this.selectedMembers.length > 3) {
            this.overflow = true;
        }
        else {
            this.selectedMembers.push(member);
        }
        this.whoisselected = this.showWhoisSelected();
    }

isSelected(themember:Member):number{
	for (let i=0; i<this.selectedMembers.length; i++) {
	if (this.selectedMembers[i]==themember) {
			return i;
			}
		}
		return -1;
	}
showWhoisSelected(): string {
        let whois = "";
        for (let member of this.selectedMembers) {
            whois += member.name + "さん, ";
        }
        return whois.substr(0, whois.length - 2) + "が選ばれました";
    }
}