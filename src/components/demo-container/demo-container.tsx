import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'demo-container',
  styleUrl: 'demo-container.scss',
  shadow: true,
})
export class DemoContainer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
