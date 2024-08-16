import React from 'react'
import './Footer.css'

const footer = ({handleItemAdd,menu_name,menu_price,handleItemName,handleItemPrice,handleMenu,inputEnter}) => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-menu'>
            <label htmlFor='menu-select'>메뉴 </label>
            <select className='menu-select' id='menu-select'
            onChange={handleMenu}>
                <option value='coffee'>coffee</option>
                <option value='non-coffee'>non-coffee</option>
                <option value='dessert'>dessert</option>
            </select>
        </div>
        <div className='footer-name'>
            <label htmlFor='items-name'>메뉴 이름</label>
            <input className='items-name' type='text'
            value={menu_name} onChange={handleItemName}
            onKeyUp={inputEnter}/>
        </div>
        <div className='footer-price'>
            <label htmlFor='items-name'>메뉴 가격</label>
            <input className='items-price' type='number'
            value={menu_price} onChange={handleItemPrice}
            onKeyUp={inputEnter}/>
        </div>
        <input className='footer-submit' type='submit' value='입력'
        onClick={handleItemAdd}/>
    </div>
  )
}

export default footer