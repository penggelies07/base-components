import * as React from 'react'
// import Popper from 'popper.js'

export type AnchorType = 'top' | 'bottom' | 'left' | 'right' |
  'topleft' | 'topright' | 'bottomleft' | 'bottomright'

export interface IPopupProps {
  visible?: boolean,
  anchor?: AnchorType,
  trigger?: 'click' | 'hover',
  onOpen?: () => void,
  onClose?: () => void,
  onMouseEnter?: () => void,
  onMouseleave?: () => void,
  onChangeRequest?: () => void
}

export interface IPopupState {
  visible: boolean
}

export default abstract class Popup<P> extends React.Component<IPopupProps & P, IPopupState> {

  state = {
    visible: false
  }

  static defaultProps = {
    anchor: 'bottom',
    trigger: 'click'
  }

  componentDidMount () {

  }

  componentDidUpdate () {

  }
}