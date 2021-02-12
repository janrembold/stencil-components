import { newE2EPage } from '@stencil/core/testing';

describe('demo-headline', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-headline></demo-headline>');

    const element = await page.find('demo-headline');
    expect(element).toHaveClass('hydrated');
  });
});
