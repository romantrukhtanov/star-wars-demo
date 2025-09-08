import type * as S from '@/core/api/server/types';
import type * as M from '@/core/api/model';

export const API_URL = 'https://swapi.dev/api';

export const DEFAULT_FETCH_INIT = {
  body: null,
  headers: new Headers(),
  method: 'GET',
};

export const MOCK_CHARACTER_ID = 50;

export const mockServerCharacter: S.Character = {
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female',
  homeworld: 'https://swapi.dev/api/planets/2/',
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/6/',
  ],
  species: [],
  vehicles: ['https://swapi.dev/api/vehicles/30/'],
  starships: [],
  created: '2014-12-10T15:20:09.791000Z',
  edited: '2014-12-20T21:17:50.315000Z',
  url: 'https://swapi.dev/api/people/5/',
};

export const mockClientCharacter: M.Character = {
  id: '5',
  name: 'Leia Organa',
  height: 150,
  mass: 49,
  hairColor: 'brown',
  skinColor: 'light',
  eyeColor: 'brown',
  birthYear: '19BBY',
  gender: 'female',
  homeWorld: 'https://swapi.dev/api/planets/2/',
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/6/',
  ],
  species: [],
  vehicles: ['https://swapi.dev/api/vehicles/30/'],
  starships: [],
  created: '2014-12-10T15:20:09.791000Z',
  edited: '2014-12-20T21:17:50.315000Z',
  url: '/character/5',
  imageUrl: '/images/people/5.jpg',
};

export const mockServerCharacters: S.Characters = {
  count: 82,
  next: 'https://swapi.dev/api/people/?page=3',
  previous: 'https://swapi.dev/api/people/?page=1',
  results: [mockServerCharacter],
};

export const mockClientCharacters: M.Characters = {
  count: 82,
  nextPage: 'https://swapi.dev/api/people/?page=3',
  previousPage: 'https://swapi.dev/api/people/?page=1',
  characters: [mockClientCharacter],
};
