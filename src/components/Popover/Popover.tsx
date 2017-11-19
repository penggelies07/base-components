import * as React from 'react'
import Popup from '../internal/Popup'
import './Popover.less'

export interface IPopoverProps {
  visible?: boolean,
  width?: number,
  narrow?: boolean,
  className?: string,
  style?: React.CSSProperties,
  children?: Node
}

export default class Popover extends Popup<IPopoverProps> {

  render () {
    const {
      children
    } = this.props

    return (
      typeof children === 'string'
      ? React.createElement('span', {}, children)
      : React.cloneElement(React.Children.only(children))
    )
  }
}