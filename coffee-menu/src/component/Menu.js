import React from 'react'
import {MdDelete, MdDeleteForever, MdEdit} from 'react-icons/md'
import './Menu.css'

const Menu = ({menu_item_list,menu_state,handleItemDelete,handleItemEdit,allDelete}) => {
  return (
    <div className='menuBox' id='menuBox'>
      <div className='allDelete'>&nbsp;&nbsp;&nbsp;&nbsp;메뉴<span>가격&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className='allDeleteBtn'
      onClick={allDelete}><MdDeleteForever/></button></span></div>
        {menu_item_list.map(({id,menu,name,price}) => {
            if(menu===menu_state){
                return(
                    <div key={id} id={id} className='menu_items'>{name}<span>{price}원
                    <button className='edit' onClick={()=>handleItemEdit(id)}><MdEdit/></button>
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