import * as React from 'react'
import Drawer from '../../components/Drawer'

interface ItestDrawerProps {}

interface ItestDrawerState {
  visible: boolean
}

export default class testDrawer extends React.Component<ItestDrawerProps, ItestDrawerState> {

  constructor (props: ItestDrawerProps) {
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
      <div className='testDrawer'>
        <h1 onClick={this.toggleDrawer}>Drawer</h1>
        <Drawer
          visible={visible}
          onRequestChange={(visible) => this.setState({visible})}
        />
      </div>
    )
  }
}