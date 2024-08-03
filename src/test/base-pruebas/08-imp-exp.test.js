import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en import 08-imp-exp.js', () => {
  test('getHeroeById debe de retornar un heroe por ID', () => {
    const id = 1;
    const hero = getHeroeById(1);

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('getHeroeById debe de retornar un valor que no existe', () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  test('getHeroByOwner retorna un arreglo de los heroes filtrados por owner - DC', () => {
    dcHeroes = [
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ];

    const dcHeroesArr = getHeroesByOwner('DC');

    expect(dcHeroesArr.length).toBe(3);
    expect(dcHeroes).toStrictEqual(dcHeroesArr);
  });

  test('getHeroByOwner retorna un arreglo de los heroes filtrados por owner -MARVEL', () => {
    marvel = [
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' },
    ];

    const marvelHeroesArr = getHeroesByOwner('Marvel');

    expect(marvelHeroesArr.length).toBe(2);
    expect(marvelHeroesArr).toStrictEqual(marvel);
  });
});
