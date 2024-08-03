import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones';

describe('Pruebas 05-funciones.js', () => {
  test('getUser debe de retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      userName: 'eddpool97',
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test('getUsuarioActivo debe de retornar un objeto', () => {
    const testUser = {
      uid: 'ABC567',
      userName: 'Edwin',
    };

    const user = getUsuarioActivo('Edwin');

    expect(testUser).toEqual(user);
  });
});
