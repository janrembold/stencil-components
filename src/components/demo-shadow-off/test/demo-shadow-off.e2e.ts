import { newE2EPage } from '@stencil/core/testing';

describe('demo-shadow-off', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-shadow-off></demo-shadow-off>');

    const element = await page.find('demo-shadow-off');
    expect(element).toHaveClass('hydrated');
  });
});
