import React from 'react'
// Components 
import Header from "./Header"
import Order from "./Order"
import Inventory from "./Inventory"

class App extends React.Component {
  render() {
    return (
      <div className='catch-of-the-day'>
      <div className="menu">
    <Header tagline="5000"/>
      </div>
      <Order/>
      <Inventory/>
      </div>
    )
  }
}

export default App;


