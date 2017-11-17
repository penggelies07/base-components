import * as React from 'react'
import './Popover.less'

interface IPopoverProps {}

interface IPopoverState {}

export default class Popover extends React.Component<IPopoverProps, IPopoverState> {

  constructor (props: IPopoverProps) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='Popover'>Popover</div>
    )
  }
}