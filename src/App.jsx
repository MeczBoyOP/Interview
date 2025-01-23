import React from 'react'

import Header from './components/Header'
import Category from './components/Category'
import Banner from './components/Banner'
import Daily_deals from './components/Daily_deals'
import Marketing from './components/Marketing'
import Pocket from './components/Pocket'
import Save from './components/Save'
import Build from './components/Build'

function App() {
  return (
    <div className=''>
      <Header />
      <Category />
      <Banner />
      <Daily_deals />
      <Marketing />

      <Pocket />
      <Save />
      <Build />
    </div>
  )
}

export default App