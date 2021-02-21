import { TaskEntity } from './task.entity';

describe('Task', () => {
  it('should be defined', () => {
    expect(new TaskEntity()).toBeDefined();
  });
});
