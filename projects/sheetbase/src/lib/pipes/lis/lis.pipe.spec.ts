import { LisPipe } from './lis.pipe';

class MockedUtilsService {}

describe('LisPipe', () => {
  it('create an instance', () => {
    const pipe = new LisPipe(new MockedUtilsService() as any);
    expect(pipe).toBeTruthy();
  });
});
