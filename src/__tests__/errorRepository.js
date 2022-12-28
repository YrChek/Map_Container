import ErrorRepository from '../errorRepository';

test.each([
  ['200', 200, 'Успешно'],
  ['404', 404, 'Не найдено'],
  ['600', 600, 'Unknown error'],
])('тест ошибки "%s"', (_, error, expected) => {
  const err = new ErrorRepository();
  const result = err.translate(error);
  expect(result).toBe(expected);
});
