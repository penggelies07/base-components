import * as React from 'react'
import './Drawer.less'

interface IDrawerProps {
  prefixCls?: string,
  visible?: boolean,
  docked?: boolean,
  width: number,
  anchor?: 'left' | 'right' | 'top' | 'bottom',
  overlayStyle?: string
  className?: string,
  style?: React.CSSProperties,
  children?: Node,
  onOpen?: () => void,
  onClose?: () => void,
  onRequestChange?: () => void
}

interface IDrawerState {}

export default class Drawer extends React.Component<IDrawerProps, IDrawerState> {

  static defaultProps = {
    visible: false,
    docked: false,
    width: 300,
    anchor: 'left'
  }

  state = {}

  render () {
    return (
      <div className='Drawer'>Drawer</div>
    )
  }
}