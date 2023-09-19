export class Component<T> {
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
