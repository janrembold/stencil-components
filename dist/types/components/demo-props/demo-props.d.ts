export interface IDemoObject {
  foo: string;
  bar: boolean;
}
export declare class DemoProps {
  /**
   * An array of strings
   */
  stringArray: string[];
  /**
   * A simple IDemoObject object
   */
  simpleObject: IDemoObject;
  render(): any;
}
