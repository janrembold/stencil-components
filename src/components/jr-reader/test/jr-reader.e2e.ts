import { newE2EPage } from '@stencil/core/testing';

describe('jr-reader', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jr-reader></jr-reader>');

    const element = await page.find('jr-reader');
    expect(element).toHaveClass('hydrated');
  });
});
