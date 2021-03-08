import { UserDetailEntity } from './userDetail.entity';

describe('User', () => {
  it('should be defined', () => {
    expect(new UserDetailEntity()).toBeDefined();
  });
});
