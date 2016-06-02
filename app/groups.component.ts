import { Component, OnInit } from '@angular/core';

import { Group } from './group';
import { GroupService } from './group.service';

@Component({
  selector: 'groups',

  templateUrl: 'app/groups.component.html'
})

export class GroupsComponent implements OnInit {

  groups: Group[];
  newGroup: Group = new Group();

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.getGroups();
  }

  createGroup() {
    this.groupService.create(this.newGroup);
    this.newGroup = new Group();
  }

  getGroups() {
    this.groupService.getGroups().then(groups => {
      this.groups = groups;
    });
  }
}
