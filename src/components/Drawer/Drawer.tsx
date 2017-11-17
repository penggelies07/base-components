import * as React from 'react'
import * as CSSTransition from 'react-transition-group/CSSTransition'
import './Drawer.less'

interface IDrawerProps {
  prefixCls?: string,
  visible?: boolean,
  docked?: boolean,
  width?: number,
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
      <CSSTransition
        classNames='Drawer'
        timeout={300}>
        <div className='Drawer'>Drawer</div>
      </CSSTransition>
    )
  }
}