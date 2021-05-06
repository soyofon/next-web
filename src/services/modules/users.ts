import service from '../index';

export enum USER_URI {
  USERS = '/users'
}

export const userModule = {
  GET_USERS() {
    return service.get(USER_URI.USERS);
  },
  POST_ADD_USER(data: any) {
    return service.post(USER_URI.USERS, data);
  }
};

export default userModule;
