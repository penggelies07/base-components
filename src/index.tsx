import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Redirect} from 'react-router'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import 'material-design-icons/iconfont/material-icons.css'

import Home from './views/Home'
import testDrawer from './examples/Drawer'
import testPopover from './examples/Popover'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/popover' component={testPopover} />
      <Route path='/drawer' component={testDrawer} />
      <Route path='/' component={Home} />
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker()
