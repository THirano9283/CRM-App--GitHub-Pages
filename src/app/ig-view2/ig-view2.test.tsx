import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import IgView2 from './ig-view2';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders IgView2 component', () => {
  const wrapper = render(<IgView2 />);
  expect(wrapper).toBeTruthy();
});