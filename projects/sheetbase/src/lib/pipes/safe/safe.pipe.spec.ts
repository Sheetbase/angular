import { SafePipe } from './safe.pipe';

class MockedDomSanitizer {}

describe('SafePipe', () => {
  it('create an instance', () => {
    const pipe = new SafePipe(new MockedDomSanitizer() as any);
    expect(pipe).toBeTruthy();
  });
});
