import React from 'react'
import ReactDOM from 'react-dom'
import {Redirect} from 'react-router'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import 'material-design-icons/iconfont/material-icons.css'

import Home from './views/Home'
import testDrawer from './examples/Drawer'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/drawer' component={testDrawer} />
      <Route path='/' component={Home} />
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker()
