import './App.css';
import Menu from './component/Menu.js'
import Footer from './component/Footer.js'
import Nav from './component/Nav.js'
import { useState } from 'react';

function App() {
  const [menu_item_list,setItem] = useState([
    {id:1,menu:'coffee',name:'아메리카노',price:1500},
    {id:2,menu:'coffee',name:'드립커피',price:1000},
    {id:3,menu:'non-coffee',name:'콜라',price:1500},
    {id:4,menu:'non-coffee',name:'사이다',price:1500},
    {id:5,menu:'dessert',name:'치즈케이크',price:4000},
    {id:6,menu:'dessert',name:'초코케이크',price:4000},
  ])
  const [menu_state,setMenu] = useState("coffee")
  const [menu,setM] = useState("coffee")
  const [menu_name,setName] = useState("")
  const [menu_price,setPrice] = useState("")

  const handleMenuState = (e) =>{
    const coffee = document.getElementById('coffee')
    const non_coffee = document.getElementById('non-coffee')
    const dessert = document.getElementById('dessert')
    coffee.style.backgroundColor='white'
    non_coffee.style.backgroundColor='white'
    dessert.style.backgroundColor='white'
    e.target.style.backgroundColor='gray'

    setMenu(e.target.value)

  }
  const handleItemAdd = () => {
    if(menu_name.length>0&&menu_price>0){
    let newMenuItemList = {id:crypto.randomUUID(),menu:menu,name:menu_name,price:menu_price}
    newMenuItemList = [...menu_item_list,newMenuItemList]
    setItem(newMenuItemList)
    setName('')
    setPrice('')
    }else{alert('메뉴 이름과 가격을 입력해주세요')}
  }
  const handleItemDelete = (id) => {
    const newMenuItemList = menu_item_list.filter(v=>v.id!==id)
    setItem(newMenuItemList)
  }
  const handleMenu = (e)=>{
    setM(e.target.value)
  }
  const handleItemName = (e)=>{
    setName(e.target.value)
  }
  const handleItemPrice = (e)=>{
    setPrice(e.target.value)
  }
  const inputEnter = (e) =>{
    if(e.code==='Enter')
      handleItemAdd()
  }
  return (
    <div className='container' id='container'>
      <div className='coffee-store'>
        <div className='header'>
          <h1>Coffee Store</h1>
        </div>
        <Nav menu_state={menu_state} handleMenuState={handleMenuState}/>
        <div className='main'>
            <Menu menu_item_list={menu_item_list} menu_state={menu_state} 
            handleItemDelete={handleItemDelete}/>
        </div>
        <Footer handleItemAdd={handleItemAdd} menu_name={menu_name} menu_price={menu_price}
         handleItemName={handleItemName} handleItemPrice={handleItemPrice}
         handleMenu={handleMenu} inputEnter={inputEnter}/>
      </div>
    </div>
  );
}

export default App;
