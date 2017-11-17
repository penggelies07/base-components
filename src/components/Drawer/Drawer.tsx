import * as React from 'react'
import * as classnames from 'classnames'
// import * as CSSTransition from 'react-transition-group/CSSTransition'
import './Drawer.less'

interface IDrawerProps {
  visible?: boolean,
  docked?: boolean,
  width?: number,
  anchor?: 'left' | 'right' | 'top' | 'bottom',
  className?: string,
  style?: React.CSSProperties,
  containerClassName?: string,
  containerStyle?: React.CSSProperties,
  overlayClassName?: string,
  overlayStyle?: React.CSSProperties,
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
    const {
      // visible,
      // docked,
      // width,
      // anchor,
      className,
      // containerStyle,
      // overlayStyle,
      // children,
      // onOpen,
      // onClose,
      // onRequestChange
    } = this.props

    const classString = classnames('Drawer', className)

    // let styleString = Object.assign({}, containerStyle)

    return (
      <div className={classString}>
        <div></div>
        {/* <CSSTransition
          classNames={classString}
          timeout={300}>
          <div className='Drawer'>Drawer</div>
        </CSSTransition> */}

      </div>
    )
  }
}