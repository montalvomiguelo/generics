import { expectType } from 'ts-expect'

/**
 * @template T
 */
export class Component {
  /**
   * @type {T}
   * @private
   */
  props

  /**
   * @param {T} props
   */
  constructor(props) {
    this.props = props
  }

  getProps() {
    return this.props
  }
}

/**
 * @template T
 * @param {Component<T>} component
 */
function cloneComponent(component) {
  return new Component(component.getProps())
}

const component = new Component({ a: 1, b: 2, c: 3 })

const clonedComponent = cloneComponent(component)

const result = clonedComponent.getProps()

expectType(result)
