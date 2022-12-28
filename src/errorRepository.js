export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [200, 'Успешно'],
      [201, 'Создано'],
      [400, 'Неправильный, некорректный запрос'],
      [404, 'Не найдено'],
      [500, 'Внутренняя ошибка сервера'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
