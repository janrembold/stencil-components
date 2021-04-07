import { newSpecPage } from '@stencil/core/testing';
import { JrReader } from '../jr-reader';

describe('jr-reader', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [JrReader],
      html: `<jr-reader></jr-reader>`,
    });
    expect(page.root).toEqualHtml(`
      <jr-reader>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </jr-reader>
    `);
  });
});
