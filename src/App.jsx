import React from 'react'
import Bulb from './components/Bulb'
import ColorGenerator from './components/ColorGenerator'

import InsectGenrator from './components/InsectGenrator'
import Story from './components/Story'
import KeyboardEvent from './components/KeyboardEvent'
import Whatapp from './components/Whatapp'


const App = () => {
  return (
    <div className=''>
      <Bulb />
      <ColorGenerator />
      <InsectGenrator />
      <Story />
      <KeyboardEvent />
      <Whatapp />
    </div>
  )
}

export default App
