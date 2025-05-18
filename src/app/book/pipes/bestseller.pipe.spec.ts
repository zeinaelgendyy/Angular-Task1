import { BestsellerPipe } from './bestseller.pipe';

describe('BestsellerPipe', () => {
  const pipe = new BestsellerPipe();

  it('should append star for bestseller', () => {
    expect(pipe.transform('1984')).toBe('1984 ⭐');
  });

  it('should return title unchanged if not bestseller', () => {
    expect(pipe.transform('Unknown Book')).toBe('Unknown Book');
  });
});
