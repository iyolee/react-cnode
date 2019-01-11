import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from '../layouts/Header'
import Home from '../components/Home/Home'

const Routes = () => (
  <Router>
    <Route path='/' component={Header} />
    <Route path='/' component={Home} />
  </Router>
)

export default Routes
