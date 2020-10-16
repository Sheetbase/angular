import { O2aPipe } from './o2a.pipe';

class MockedUtilsService {}

describe('O2aPipe', () => {
  it('create an instance', () => {
    const pipe = new O2aPipe(new MockedUtilsService() as any);
    expect(pipe).toBeTruthy();
  });
});
