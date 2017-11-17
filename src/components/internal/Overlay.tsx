import * as React from 'react'

interface IOverlayProps {}

interface IOverlayState {}

export default class Overlay extends React.Component<IOverlayProps, IOverlayState> {

  constructor (props: IOverlayProps) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='Overlay'>Overlay</div>
    )
  }
}