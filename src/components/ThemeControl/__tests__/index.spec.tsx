import { describe, expect, it } from 'vitest';

import { render } from '@/tests/test-utils';

import { ThemeControl } from '../ThemeControl';

describe('Skeleton', () => {
  it('render component', () => {
    const { baseElement } = render(<ThemeControl />);
    expect(baseElement).toMatchSnapshot();
  });
});
