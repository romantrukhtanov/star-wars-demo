import { describe, expect, it } from 'vitest';

import { render } from '@/tests/test-utils';

import { CharacterCard } from '../CharacterCard';

const mockData = {
  name: 'Leia Organa',
  gender: 'female',
  url: 'https://swapi.dev/api/people/5/',
  id: '5',
  imageUrl: '/images/people/5.jpg',
};

describe('CharacterCard', () => {
  it('render component', () => {
    const { baseElement } = render(<CharacterCard character={mockData} />);
    expect(baseElement).toMatchSnapshot();
  });
});
