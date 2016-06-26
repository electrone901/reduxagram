import React from 'react'
import {render} from 'react-dom'
import css from './styles/style.styl'

// import components
import Main from './components/Main.js'

render(<Main><p>hello from main</p></Main>, document.getElementById('root'))
