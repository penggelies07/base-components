import * as React from 'react'
import Drawer from '../../components/Drawer'

interface ItestDrawerProps {}

interface ItestDrawerState {}

export default class testDrawer extends React.Component<ItestDrawerProps, ItestDrawerState> {

  constructor (props: ItestDrawerProps) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='testDrawer'>
        <h1>Drawer</h1>
        <Drawer/>
      </div>
    )
  }
}