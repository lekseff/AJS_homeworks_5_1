import orderByProps from '../app';

describe('sorting check', () => {
  let hero;
  beforeEach(() => {
    hero = {
      name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
  });

  test('sorting check', () => {
    const sortOrder = ['name', 'level'];
    const expected = [
      { key: 'name', value: 'мечник' }, // порядок взят из массива с ключами
      { key: 'level', value: 2 }, // порядок взят из массива с ключами
      { key: 'attack', value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
      { key: 'defence', value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
      { key: 'health', value: 10 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
    ];
    expect(orderByProps(hero, sortOrder)).toEqual(expected);
  });

  test('sorting check -Error', () => {
    const sortOrder = ['noValue'];
    function throwWrapper() {
      orderByProps(hero, sortOrder);
    }
    expect(throwWrapper).toThrowError(new Error('Invalid property: noValue'));
  });
});
