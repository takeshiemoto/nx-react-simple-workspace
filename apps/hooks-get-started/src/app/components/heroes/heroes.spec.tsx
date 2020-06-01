import React from 'react';
import { render } from '@testing-library/react';

import Heroes from './heroes';

describe(' Heroes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Heroes />);
    expect(baseElement).toBeTruthy();
  });
});
