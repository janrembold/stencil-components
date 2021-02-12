import { newSpecPage } from '@stencil/core/testing';
import { DemoContainer } from '../demo-container';

describe('demo-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DemoContainer],
      html: `<demo-container></demo-container>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-container>
    `);
  });
});
