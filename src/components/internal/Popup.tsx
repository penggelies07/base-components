import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Popper from 'popper.js'

export type AnchorType = 'top' | 'bottom' | 'left' | 'right' |
  'topleft' | 'topright' | 'bottomleft' | 'bottomright'

export interface IPopupProps {
  visible?: boolean,
  anchor?: AnchorType,
  trigger?: 'click' | 'hover',
  disable?: boolean,
  onOpen?: () => void,
  onClose?: () => void,
  onMouseEnter?: () => void,
  onMouseleave?: () => void,
  onChangeRequest?: (visible: boolean) => void
}

export interface IPopupState {
  visible: boolean
}

export default abstract class Popup<P> extends React.Component<IPopupProps & P, IPopupState> {

  static defaultProps = {
    anchor: 'bottom',
    trigger: 'click'
  }

  state = {
    visible: false
  }

  target: Element
  container: Element
  popper: Element
  $popper: Popper | null
  timer: any

  abstract getArrow: (popper: HTMLElement) => Element | null
  abstract getContent: () => React.ReactElement<any> | null

  componentDidMount () {
    this.target = ReactDOM.findDOMNode(this)

    if (!this.target) {
      return
    }

    const {visible} = this.state

    if (visible) {
      this.show()
    }
  }

  componentDidUpdate () {
    console.log()
  }

  show = () => {
    const {disable, onChangeRequest} = this.props

    if (disable) {
      return
    }

    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }

    this.setState({visible: true}, () => {
      document.addEventListener('click', this.onClickOutside)
      this.createPopper()

      if (onChangeRequest) {
        onChangeRequest(true)
      }
    })
  }

  hide = () => {
    const {disable, onChangeRequest} = this.props

    if (this.timer) {
      clearTimeout(this.timer)
    }
    
    if (disable) {
      return
    }

    this.timer = setTimeout(() => {
      this.setState({visible: false}, () => {
        document.removeEventListener('click', this.onClickOutside)
        this.destroyPopper()
  
        if (onChangeRequest) {
          onChangeRequest(true)
        }
      })
    }, 200)

  }

  onClickOutside = (e: MouseEvent) => {
    const el = e.target as any
    const {target, popper} = this

    if (!el || !target || !popper) {
      return
    }

    if (target.contains(el) || popper.contains(el)) {
      return
    }

    this.hide()
  }

  createPopper = () => {
    if (!this.container) {
      this.container = document.createElement('div')
      document.body.appendChild(this.container)
    }

    this.renderPopper()
  }

  renderPopper = () => {
    const {anchor} = this.props
    const content = this.getContent()

    if (!content) {
      return
    }

    if (this.$popper) {
      this.$popper.destroy()
    }

    this.$popper = ReactDOM.unstable_renderSubtreeIntoContainer(this, content, this.container)
  }

  destroyPopper = () => {
    console.log()
  }
}