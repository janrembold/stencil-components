import { newE2EPage } from '@stencil/core/testing';

describe('demo-state', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-state></demo-state>');

    const element = await page.find('demo-state');
    expect(element).toHaveClass('hydrated');
  });
});
