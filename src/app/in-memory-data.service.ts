import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

@Injectable({ providedIn: 'root' })
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, username: 'zeina', password: '1234', token: 'fake-jwt-token' }
    ];
    return { users };
  }
  post(reqInfo: RequestInfo) {
    if (reqInfo.collectionName === 'users') {
      console.log( reqInfo.req );
      const { username, password } = reqInfo.utils.getJsonBody(reqInfo.req);

      const user = (reqInfo.collection as any[]).find(
        u => u.username === username && u.password === password
      );

      return reqInfo.utils.createResponse$(() => {
        return {
          body: user
            ? { token: user.token }
            : { error: 'Invalid credentials' },
          status: user ? 200 : 401
        };
      });
    }
    return undefined!;
  }
}