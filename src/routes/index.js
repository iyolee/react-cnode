import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import '../assets/style/reset.less'

import Header from '../layouts/Header'

const Routes = () => (
  <Router>
    <Route path='/' component={Header} />
  </Router>
)

export default Routes
