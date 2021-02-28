import { JwtStrategy } from './auth.strategy';

describe('AuthInterceptor', () => {
  it('should be defined', () => {
    expect(new JwtStrategy()).toBeDefined();
  });
});
