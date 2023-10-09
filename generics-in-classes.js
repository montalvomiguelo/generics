import { expectType } from 'ts-expect'

/**
 * @template T
 */
export class Component {
  props

  /**
   * @param {T} props
   */
  constructor(props) {
    this.props = props
  }
}

const component = new Component({ name: 'John' })
const props = component.props

expectType(props)
