import React from 'react'
import {render} from 'react-dom'
//import css
import css from './styles/style.styl'

// import components
import Main from './components/Main.js'
import PhotoGrid from './components/PhotoGrid.js'
import Single from './components/Single.js'

//import react-router dependencies
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path='/view/:postId' component={Single}></Route>

    </Route>
  </Router>
)

render(router, document.getElementById('root'))
