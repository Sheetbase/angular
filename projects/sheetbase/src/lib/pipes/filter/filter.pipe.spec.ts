import { FilterPipe } from './filter.pipe';

class MockedUtilsService {}

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe(new MockedUtilsService() as any);
    expect(pipe).toBeTruthy();
  });
});
