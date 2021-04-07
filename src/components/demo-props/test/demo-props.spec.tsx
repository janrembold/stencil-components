import { DemoProps } from '../demo-props'

describe('demo-props', () => {
  it('renders', async () => {
    const whuat = new DemoProps()
    whuat.simpleObject = { foo: 'title', bar: true }
    whuat.stringArray = ['one']

    expect(whuat.render()).toEqual('wtf')

    // const page = await newSpecPage({
    //   components: [DemoProps],
    //   template: () => <DemoProps stringArray={['one']} simpleObject={{ foo: title, bar: true }} />,
    // })
    // expect(page.root).toEqualHtml(`
    //   <demo-props>
    //     <mock:shadow-root>
    //       <slot></slot>
    //     </mock:shadow-root>
    //   </demo-props>
    // `)
  })
})
