import React from 'react'
import Bulb from './components/Bulb'
import ColorGenerator from './components/ColorGenerator'

import InsectGenrator from './components/InsectGenrator'
import Story from './components/Story'


const App = () => {
  return (
    <div className=''>
      <Bulb />
      <ColorGenerator />
      <InsectGenrator />
      <Story />
    </div>
  )
}

export default App
