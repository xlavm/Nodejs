const message = require('./message');

describe('message text', () => {
  const expected = 'esto es un texto luis tested';

  it('message valid', () => {
    const data = 'esto es un texto';
    const result = message(data);
    expect(result).toBe(expected);
  });

  it('message invalid', () => {
    const data = 'esto es un texto invalido';
    const result = message(data);
    expect(result).not.toBe(expected);
  });
});
