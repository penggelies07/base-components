import * as React from 'react'
import * as classnames from 'classnames'
import Popup from '../internal/Popup'
import './Popover.less'

export interface IPopoverProps {
  width?: number,
  narrow?: boolean,
  className?: string,
  style?: React.CSSProperties,
  children?: any
}

export default class Popover extends Popup<IPopoverProps> {

  getContent = () => {
    const {
      width,
      narrow,
      className,
      style,
      children
    } = this.props

    const classString = classnames('Popover', className, {
      [`Popover-narrow`]: !!narrow
    })
    const styleString = Object.assign({width: width || 100}, style)

    return (
      <div className={classString} style={styleString}>
        {children}
        <div className='Popover-arrow'/>
      </div>
    )
  }

  getArrow= (popper: HTMLElement) => {
    return popper.querySelector('.Popover-narrow')
  }

  render () {
    return this.getContent()
  }
}