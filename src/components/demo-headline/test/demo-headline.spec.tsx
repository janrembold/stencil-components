import { newSpecPage } from '@stencil/core/testing';
import { DemoHeadline } from '../demo-headline';

describe('demo-headline', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DemoHeadline],
      html: `<demo-headline></demo-headline>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-headline>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-headline>
    `);
  });
});
