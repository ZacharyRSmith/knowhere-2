import { Injectable } from '@angular/core';

import { Group } from './group';
import { GROUPS } from './mock-groups';

@Injectable()
export class GroupService {
  // addParticipant(data) {
  //   return $http({
  //     method: 'POST',
  //     url: '/api/group/add',
  //     data: data
  //   });
  // }

  // create(group: Group) {
  //   return $http({
  //     method: 'POST',
  //     url: '/api/group',
  //     data: group
  //   })
  //     .then(res => res.data);
  // }

  create(group: Group) {
    return Promise.resolve(GROUPS)
      .then(groups => {
        // TODO validate
        const lastId = groups.slice(-1)[0].id;
        group.id = lastId + 1;
        groups.push(group);
        alert('success!');
      });
  }

  del(id: number) {
    return Promise.resolve(GROUPS)
      .then(groups => {
        const foundIdx = groups.findIndex(group => group.id === id);
        groups.splice(foundIdx, 1);
      });
  }

  getGroup(id: number) {
    return Promise.resolve(GROUPS)
      .then(groups => groups.find(group => group.id === id));
  }

  getGroups() {
    return Promise.resolve(GROUPS);
  }

  // removeMember(params: Object) {
  //   return $http({
  //     method: 'DELETE',
  //     url: '/api/group/user',
  //     params
  //   })
  //     .then(res => res.data);
  // }
}
