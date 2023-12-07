import { describe, expect, it } from 'vitest';

import { render } from '@/tests/test-utils';

import type { Breadcrumb } from '../Breadcrumbs';
import { Breadcrumbs } from '../Breadcrumbs';

const mockData: Array<Breadcrumb> = [{
  title: 'Characters',
  link: '/characters',
  disabled: false,
}, {
  title: 'Luke',
  link: '#',
  disabled: true,
}];

describe('Breadcrumbs', () => {
  it('render component', () => {
    const { baseElement } = render(<Breadcrumbs data={mockData} />);
    expect(baseElement).toMatchSnapshot();
  });
});
