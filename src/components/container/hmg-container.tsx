import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'hmg-container',
  styleUrl: 'hmg-container.scss',
  shadow: true,
})
export class HmgContainer {
  render() {
    return <Host><slot></slot></Host>;
  }
}
