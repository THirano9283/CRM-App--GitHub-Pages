import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import IgView from './ig-view';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);

test('renders IgView component', () => {
  const wrapper = render(<IgView />);
  expect(wrapper).toBeTruthy();
});