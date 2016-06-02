import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Group } from './group';
import { GroupService } from './group.service';

@Component({
  moduleId: module.id,
  selector: 'group-detail',
  templateUrl: 'group-detail.component.html'
})
export class GroupDetailComponent implements OnInit {

  group: Group;

  constructor(
    private groupService: GroupService,
    private routeParams: RouteParams) { }

  ngOnInit() {
    let id = +this.routeParams.get('id');

    this.groupService.getGroup(id)
      .then(group => this.group = group);
  }

  del() {
    let id = +this.routeParams.get('id');

    this.groupService.del(id)
      .then(() => {
        alert('success!');
        this.goBack();
      });
  }

  goBack() {
    window.history.back();
  }
}