import { Component, OnInit } from '@angular/core';

import { Group } from './group';
import { GroupService } from './group.service';

@Component({
  selector: 'groups',

  templateUrl: 'app/groups.component.html'
})

export class GroupsComponent implements OnInit {
  groups: Group[];

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.groupService.getGroups().then(groups => {
      this.groups = groups;
    });
  }
}
