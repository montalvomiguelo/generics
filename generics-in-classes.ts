import { expectType } from 'ts-expect'

class Component<T> {
  props: T

  constructor(props: T) {
    this.props = props
  }

  getProps() {
    return this.props
  }
}

const component = new Component({ name: 'John' })
const props = component.getProps()

expectType<{ name: string }>(props)
