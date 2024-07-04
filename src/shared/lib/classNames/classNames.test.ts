import { classNames } from './classNames';

describe('classNames helper', () => {
  test('with main class only', () => {
    const expected = 'mainClass';

    expect(classNames('mainClass')).toBe(expected);
  });

  test('with additional class', () => {
    const expected = 'mainClass secondaryClass';

    expect(classNames('mainClass', ['secondaryClass'])).toBe(expected);
  });

  test('with additional class and all mods', () => {
    const expected = 'mainClass secondaryClass hovered disabled';

    expect(
      classNames('mainClass', ['secondaryClass'], {
        hovered: true,
        disabled: true,
      }),
    ).toBe(expected);
  });

  test('with some mods only', () => {
    const expected = 'mainClass hovered';

    expect(
      classNames('mainClass', [], {
        hovered: true,
        disabled: false,
      }),
    ).toBe(expected);
  });

  test('with undefined mods', () => {
    const expected = 'mainClass';

    expect(
      classNames('mainClass', [], {
        hovered: undefined,
        disabled: false,
      }),
    ).toBe(expected);
  });
});
