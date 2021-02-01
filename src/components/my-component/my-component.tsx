import { Component, Prop, h, Host } from '@stencil/core';
import { format } from '../../utils/utils';

/**
 * MyComponent Desc
 */
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <Host>Hellooooo, <span class="foo-bar">World</span>! I'm {this.getText()}</Host>;
  }
}
