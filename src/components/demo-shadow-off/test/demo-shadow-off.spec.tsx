import { newSpecPage } from '@stencil/core/testing';
import { DemoShadowOff } from '../demo-shadow-off';

describe('demo-shadow-off', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DemoShadowOff],
      html: `<demo-shadow-off></demo-shadow-off>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-shadow-off>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-shadow-off>
    `);
  });
});
