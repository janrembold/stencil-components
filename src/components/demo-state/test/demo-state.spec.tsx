import { newSpecPage } from '@stencil/core/testing';
import { DemoState } from '../demo-state';

describe('demo-state', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DemoState],
      html: `<demo-state></demo-state>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-state>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-state>
    `);
  });
});
