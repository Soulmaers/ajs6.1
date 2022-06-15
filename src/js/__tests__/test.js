import Validator from '../app';

test.each([
  ['Alex', true],
  ['3Alex', false],
  ['Alex3', false],
  ['Ale3x', true],
  ['A490000lex', false],
  ['-Alex', false],
  ['Alex_', false],
])('проверка', (name, result) => {
  const validator = new Validator();
  expect(validator.validateUsername(name)).toBe(result);
});
