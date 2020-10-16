import { AgoPipe } from './ago.pipe';

class MockedDateService {}

describe('AgoPipe', () => {
  it('create an instance', () => {
    const pipe = new AgoPipe(new MockedDateService() as any);
    expect(pipe).toBeTruthy();
  });
});
