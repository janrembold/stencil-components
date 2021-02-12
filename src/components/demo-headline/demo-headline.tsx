import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'demo-headline',
  styleUrl: 'demo-headline.css',
  shadow: true,
})
export class DemoHeadline {
  /**
   * The headline text
   */
  @Prop() headline: string;

  render() {
    return (
      <Host>
        <h2>{this.headline}</h2>
      </Host>
    );
  }

}
