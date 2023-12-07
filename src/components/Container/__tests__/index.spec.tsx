import { describe, expect, it } from 'vitest';

import { render } from '@/tests/test-utils';

import { Container } from '../Container';

describe('Container', () => {
  it('render component', () => {
    const { baseElement } = render(<Container>Some content</Container>);
    expect(baseElement).toMatchSnapshot();
  });
});
