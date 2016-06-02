import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Group } from './group';
import { GroupService } from './group.service';

@Component({
  selector: 'groups',

  templateUrl: 'app/groups.component.html'
})

export class GroupsComponent implements OnInit {

  groups: Group[];
  newGroup: Group = new Group();

  constructor(
    private groupService: GroupService,
    private router: Router) { }

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

  goToDetail(group: Group) {
    let link = ['GroupDetail', { id: group.id }];
    this.router.navigate(link);
  }
}
