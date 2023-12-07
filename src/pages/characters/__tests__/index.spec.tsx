import { beforeAll, describe, expect, it, vi } from 'vitest';

import { render } from '@/tests/test-utils';
import { mockClientCharacters } from '@/tests/__mocks__/fixtures.ts';

import { Characters } from '../Characters';
import * as useLoadCharactersHook from '../useLoadCharacters';

describe('Characters', () => {
  beforeAll(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  it('render characters', () => {
    const useLoadCharactersSpy = vi.spyOn(useLoadCharactersHook, 'useLoadCharacters');

    useLoadCharactersSpy.mockReturnValue({
      loading: false,
      currentPage: 1,
      charactersData: mockClientCharacters,
      setCharactersData: vi.fn(),
      setCurrentPage: vi.fn(),
      setSearchParams: vi.fn(),
      searchParams: new URLSearchParams(),
    });

    const { baseElement } = render(<Characters />);

    expect(baseElement).toMatchSnapshot();
  });
});
