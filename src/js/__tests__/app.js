import orderByProps from '../app';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

test('Передан свой порядок => name, vlue ...', () => {
  const dataCheck = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(obj, ['name', 'level'])).toEqual(dataCheck);
});

test('Передан не передан', () => {
  const dataCheck = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(orderByProps(obj)).toEqual(dataCheck);
});
