import { Injectable } from '@angular/core';

import { Group } from './group';
import { GROUPS } from './mock-groups';

@Injectable()
export class GroupService {
  create(group: Group) {
    return Promise.resolve(GROUPS)
      .then(groups => {
        // TODO validate
        groups.push(group);
        alert('success!');
      });
  }

  getGroups() {
    return Promise.resolve(GROUPS);
  }
}
