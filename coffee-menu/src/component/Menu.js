import React from 'react'
import {MdDelete} from 'react-icons/md'
import './Menu.css'

const Menu = ({menu_item_list,menu_state,handleItemDelete}) => {
  return (
    <div className='menuBox' id='menuBox'>
        {menu_item_list.map(({id,menu,name,price}) => {
            if(menu===menu_state){
                return(
                    <div key={id} id={id} className='menu_items'>{name}<span>{price}원
                    <button className='delete' onClick={()=>handleItemDelete(id)}><MdDelete/></button></span><hr/>
                    </div>
                )
            }
            return(null)
        })}
    </div>
  )
}

export default Menu