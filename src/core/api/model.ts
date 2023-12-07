export type Character = {
  id: string,
  url: string
  name: string,
  height: number,
  mass: number | null,
  hairColor: string,
  skinColor: string,
  eyeColor: string,
  birthYear: string,
  gender: string,
  homeWorld: string,
  films: Array<string>,
  species: Array<string>,
  vehicles: Array<string>,
  starships: Array<string>,
  created: string,
  edited: string,
  imageUrl: string,
};

export type Characters = {
  count: number,
  nextPage: string | null,
  previousPage: string | null,
  characters: Array<Character>;
};
