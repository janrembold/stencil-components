import { foo } from './foo'

describe('foo', () => {
  it('returns baz', () => {
    expect(foo('baz')).toEqual('Hello baz')
  })
})
