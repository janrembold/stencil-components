import { Component, Host, h, Prop } from '@stencil/core';

export interface IDemoObject {
  foo: string
  bar: boolean
}

@Component({
  tag: 'demo-props',
  styleUrl: 'demo-props.css',
  shadow: true,
})
export class DemoProps {
  /**
   * An array of strings
   */
  @Prop() stringArray: string[] = [];

  /**
   * A simple IDemoObject object
   */
  @Prop() simpleObject!: IDemoObject;

  render() {
    return (
      <Host>
        <h5>List of strings</h5>
        <p>{this.simpleObject.foo || 'undefined'}</p>
        {this.simpleObject.bar && <p>Bar is true</p>}
        <ul>
          {this.stringArray.map(str => (<li>{str}</li>))}
        </ul>
      </Host>
    );
  }

}
