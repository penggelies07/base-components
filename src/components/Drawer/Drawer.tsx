import * as React from 'react'
import * as classnames from 'classnames'
import * as CSSTransition from 'react-transition-group/CSSTransition'
import Overlay from '../internal/Overlay'
import './Drawer.less'

interface IDrawerProps {
  visible: boolean,
  width?: number,
  anchor?: 'left' | 'right',
  className?: string,
  style?: React.CSSProperties,
  containerClassName?: string,
  containerStyle?: React.CSSProperties,
  overlayClassName?: string,
  overlayStyle?: React.CSSProperties,
  children?: Node,
  onRequestChange?: (visible: boolean) => void
}

interface IDrawerState {
  visible: boolean
}

export default class Drawer extends React.Component<IDrawerProps, IDrawerState> {

  static defaultProps = {
    visible: false,
    width: 300,
    anchor: 'left'
  }

  state = {
    visible: false
  }

  componentWillReceiveProps (nextProps: any) {
    if (nextProps.visible !== this.state.visible) {
      this.setState({visible: nextProps.visible})
    }
  }

  onClose = () => {
    if (this.props.onRequestChange) {
      this.props.onRequestChange(false)
    }
    this.setState({visible: false})
  }

  render () {
    const {
      width,
      anchor,
      className,
      style,
      containerClassName,
      containerStyle,
      overlayClassName,
      overlayStyle,
      children
    } = this.props

    const {
      visible
    } = this.state

    const containerClassString = classnames('Drawer', containerClassName, {
      [`Drawer-${anchor}`]: !!anchor
    })
    const containerStyleString = Object.assign({width}, containerStyle)

    return (
      <div className={className} style={style}>
        <Overlay
          className={overlayClassName}
          style={overlayStyle}
          visible={visible}
          onClick={this.onClose}
        />

        <CSSTransition
          classNames='Drawer'
          mountOnEnter
          unmountOnExit
          in={visible}
          timeout={300}
        >
          <div className={containerClassString} style={containerStyleString}>
            {children}
          </div>
        </CSSTransition>
      </div>
    )
  }
}