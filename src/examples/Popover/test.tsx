import * as React from 'react'
import Popover from '../../components/Popover'

interface ITestPopoverProps {}

interface ITestPopoverState {
  visible: boolean
}

export default class TestPopover extends React.Component<ITestPopoverProps, ITestPopoverState> {

  state = {
    visible: false
  }

  togglePopover = () => {
    const {visible} = this.state
    this.setState({visible: !visible})
  }

  render () {
    const {visible} = this.state

    return (
      <div className='TestPopover'>
        <h1 onClick={this.togglePopover}>TestPopover</h1>
        <Popover
          visible={visible}
          onChangeRequest={(v) => this.setState({visible: v})}
        >
        123
        </Popover>
      </div>
    )
  }
}