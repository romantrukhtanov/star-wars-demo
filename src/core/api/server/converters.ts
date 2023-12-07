import { getIdFromUrl, getImageUrl } from '@/core/api/helpers.ts';
import { BASE_URL } from '@/utils/env.ts';

import type * as M from '../model';

import type * as S from './types';

export const convertCharacter = (character: S.Character): M.Character => {
  const id = getIdFromUrl(character.url) || '';
  const url = `${BASE_URL}character/${id}`;

  return {
    id,
    url,
    name: character.name,
    mass: parseInt(character.mass, 10) || null,
    height: parseInt(character.height, 10),
    gender: character.gender,
    eyeColor: character.eye_color,
    hairColor: character.hair_color,
    skinColor: character.skin_color,
    birthYear: character.birth_year,
    homeWorld: character.homeworld,
    films: character.films,
    species: character.species,
    starships: character.starships,
    vehicles: character.vehicles,
    created: character.created,
    edited: character.edited,
    imageUrl: getImageUrl(id, BASE_URL),
  };
};

export const convertCharacters = (characters: S.Characters): M.Characters => {
  return {
    count: characters.count,
    nextPage: characters.next,
    previousPage: characters.previous,
    characters: characters.results.map(convertCharacter),
  };
};
