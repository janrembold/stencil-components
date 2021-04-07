import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'demo-shadow-off',
  styleUrl: 'demo-shadow-off.css',
  shadow: false,
})
export class DemoShadowOff {
  render() {
    return (
      <Host>
        <h2>H2 - Shadow DOM off</h2>
      </Host>
    )
  }
}
