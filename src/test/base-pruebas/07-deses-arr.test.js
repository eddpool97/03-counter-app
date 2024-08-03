import { retornaArreglo } from '../../base-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {
  test('Debe de retornar un String y un Number', () => {
    const [letters, numbers] = retornaArreglo();

    //La funcion "expect" evalua tambien el tipo del valor (String, Number, Boolean, Object, etc)
    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');

    expect(letters).toEqual(expect.any(String));
  });
});
