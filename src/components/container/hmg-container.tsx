import { Component, h } from '@stencil/core';

@Component({
  tag: 'hmg-container',
  styleUrl: 'hmg-container.scss',
  shadow: true,
})
export class Container {
  render() {
    return <div class="container"><slot></slot></div>;
  }
}
