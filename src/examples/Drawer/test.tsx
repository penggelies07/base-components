import * as React from 'react'
import Drawer from '../../components/Drawer'

interface ITestPopoverProps {}

interface ITestPopoverState {
  visible: boolean
}

export default class TestPopover extends React.Component<ITestPopoverProps, ITestPopoverState> {

  constructor (props: ITestPopoverProps) {
    super(props)
    this.state = {
      visible: false
    }
  }

  toggleDrawer = () => {
    const {visible} = this.state
    this.setState({visible: !visible})
  }

  render () {
    const {visible} = this.state

    return (
      <div className='TestPopover'>
        <h1 onClick={this.toggleDrawer}>Drawer</h1>
        <Drawer
          visible={visible}
          onRequestChange={(v) => this.setState({visible: v})}
        />
      </div>
    )
  }
}