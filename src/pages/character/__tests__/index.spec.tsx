import { beforeAll, describe, expect, it, vi } from 'vitest';

import { render } from '@/tests/test-utils';
import { mockClientCharacter } from '@/tests/__mocks__/fixtures.ts';

import { Character } from '../Character';
import * as useLoadCharacterHook from '../useLoadCharacter';

describe('Character', () => {
  beforeAll(() => {
    vi.stubGlobal('fetch', vi.fn());
    vi.mock('@/utils/env.ts', () => ({ BASE_URL: '/' }));
  });

  it('render character', () => {
    const useLoadCharacterSpy = vi.spyOn(useLoadCharacterHook, 'useLoadCharacter');

    useLoadCharacterSpy.mockReturnValue({
      id: '1',
      loading: false,
      character: mockClientCharacter,
      setCharacter: vi.fn(),
    });

    const { getByTestId, baseElement } = render(<Character />);

    expect(baseElement).toMatchSnapshot();

    const editButton = getByTestId('edit-button');
    expect(editButton).toBeTruthy();
  });
});
