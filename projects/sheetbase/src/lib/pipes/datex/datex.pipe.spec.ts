import { DatexPipe } from './datex.pipe';

class MockedDateService {}

describe('DatexPipe', () => {
  it('create an instance', () => {
    const pipe = new DatexPipe(new MockedDateService() as any);
    expect(pipe).toBeTruthy();
  });
});
