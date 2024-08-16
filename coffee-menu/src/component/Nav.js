import React from 'react'
import './Nav.css'
const Nav = ({menu_state,handleMenuState}) => {
  return (
    <nav className='menu' id='menu'>
        <button id='coffee' value='coffee' style={{backgroundColor:'gray'}}
        onClick={handleMenuState}>coffee</button>
        <button id='non-coffee' value='non-coffee' 
        onClick={handleMenuState}>non-coffee</button>
        <button id='dessert' value='dessert' 
        onClick={handleMenuState}>dessert</button>
    </nav>
  )
}

export default Nav