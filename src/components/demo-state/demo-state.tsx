import { Component, Host, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'demo-state',
  styleUrl: 'demo-state.css',
  shadow: true,
})
export class DemoState {
  @State() count: number = 0;

  @Listen('click', { capture: true })
  handleClick() {
    this.count++;
  }

  render() {
    return (
      <Host>
        <button>Clicked me {this.count} times</button>
      </Host>
    );
  }

}
