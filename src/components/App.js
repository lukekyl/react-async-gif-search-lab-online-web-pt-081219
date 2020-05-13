import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
      <div className="nav">
        <NavBar color='black' title="Giphy Search" />
      </div>
      <div className="gifs">
        <GifListContainer />
      </div>
    </div>
  )
}

export default App
