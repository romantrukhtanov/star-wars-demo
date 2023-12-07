import { describe, expect, it } from 'vitest';

import { render } from '@/tests/test-utils';

import { Search } from '../Search';

describe('Search', () => {
  it('render component', () => {
    const { baseElement } = render(<Search />);
    expect(baseElement).toMatchSnapshot();
  });
});
