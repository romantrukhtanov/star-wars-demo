import { describe, expect, it } from 'vitest';

import { render } from '@/tests/test-utils';

import { Skeleton } from '../Skeleton';

describe('Skeleton', () => {
  it('render component', () => {
    const { baseElement } = render(<Skeleton />);
    expect(baseElement).toMatchSnapshot();
  });
});
