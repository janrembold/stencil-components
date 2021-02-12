import { newE2EPage } from '@stencil/core/testing';

describe('demo-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-container></demo-container>');

    const element = await page.find('demo-container');
    expect(element).toHaveClass('hydrated');
  });
});
