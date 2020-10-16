import { CurrencyxPipe } from './currencyx.pipe';

class MockedCurrencyService {}

describe('CurrencyxPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyxPipe(new MockedCurrencyService() as any);
    expect(pipe).toBeTruthy();
  });
});
