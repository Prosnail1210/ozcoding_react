import React, { useEffect, useState } from 'react'
import { Link, useAsyncError, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import{getAuth,signInWithPopup,GoogleAuthProvider, onAuthStateChanged, signOut, linkWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase'
import useDebounce from '../hooks/useDebounce'

const Nav = () => {

  const [searchValue,setSearchVlue] = useState('')
  const initialUserData = localStorage.getItem('userData')? JSON.parse(localStorage.getItem('userData')):{}
  const [userData, setUserData] = useState(initialUserData)
  const navigate = useNavigate()
  const {pathname}=useLocation()
  const handleChange = (e)=>{
    setSearchVlue(e.target.value)
    navigate(`/search?q=${e.target.value}`)
  }
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()

  const handleAuth=()=>{
    signInWithPopup(auth,provider)
    .then((result)=>{
      setUserData(result.user)
      localStorage.setItem('userData',JSON.stringify(result.user))
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(!user){
        navigate('/')
      }else if(user && pathname==='/'){
        navigate('/main')
      }
    })
    return()=>{

    }
  },[auth,navigate,pathname])

  const handleLogOut = () =>{
    signOut(auth).then(()=>{
      setUserData({})
      localStorage.removeItem('userData')
    }).catch((error)=>{
      console.log(error)
    })
  }
  const [ID, setID] = useState('')
  const [PW, setPW] = useState('')
  const handleIDPWAuth=()=>{
    signInWithEmailAndPassword(auth,ID,PW)
    .then(result=>{
      setUserData(result.user)
      localStorage.setItem('userData',JSON.stringify(result.user))
    })
    .catch(e=>{console.log('로그인 실패',e)})
  }
  const create= async()=>{
    const result = await createUserWithEmailAndPassword(auth,ID,PW)
    if(result){
      setUserData(result.user)
      localStorage.setItem('userData',JSON.stringify(result.user))
    }
  }
  return (
    <NavWrapper >
      <Logo>
          <img alt="logo" src='/images/apple-logo.png' onClick={()=>window.location.href='/main'}/>
      </Logo>
    {pathname==="/"?(
      <>
      <Login>로그인
      <LoginWindow>
        <form style={{display:'flex', flexWrap:'wrap',justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
        <label htmlFor='id' style={{width:'10%'}}>ID: </label>
        <input id='id' style={{width:'80%'}} value={ID} type='text'
        onChange={e=>setID(e.target.value)}/>
        <label htmlFor='pw' style={{width:'10%'}}>PW: </label>
        <input id='pw' style={{width:'80%'}} value={PW} type='password'
        onChange={e=>setPW(e.target.value)}/>
        <input type='button' value='회원가입' onClick={create}/>
        <input type='submit' value='로그인' onClick={(e)=>{e.preventDefault(); handleIDPWAuth()}}/>
        </form>
        <div style={{border:'3px solid black', borderRadius:'50%', textAlign:'center', width:'50px',height:'50px', cursor:'pointer'}}
        onClick={handleAuth}>G</div>
      </LoginWindow>
      </Login>
      </>
    ):(
      <Input type='text' className='nav_input'
      value={searchValue}
      onChange={handleChange}
      placeholder='영화를 검색해주세요.'/>
    )
  }
  {pathname ==='/'?null:
  <SignOut>
    <UserImg src={userData.photoURL} alt={userData.displayName}/>
    <DropDown>
      <span onClick={handleLogOut}>
        Sign Out
      </span>
    </DropDown>
  </SignOut>
  }

    </NavWrapper>
  )
}
const UserImg = styled.img`
border-radius:50%;
width:100%;
height:100%;`

const DropDown=styled.div`
  postion:absolute;
  top:48px;
  right:0;
  background: rgb(19,19,19);
  border:1px solid grba(151,151,151,0.34);
  border-radius:4px;
  box-shadow:rgb(0 0 0 /50%) 0px 0px 18px 0px
  padding: 10px;
  font-size:14px;
  letter-spacing:3px;
  width:100px;
  opacity:0;
`
const SignOut =styled.div`
position:reladtive;
height:48px;
width:48px;
dispaly:flex;
cursor:pointer;
align-items:center;
justify-content:center;
&:hover{
${DropDown}{
  opacity:1;
  transition-duration:1s;
  }
}`
const Input= styled.input`
  position: fixed;
  left: 50%;
  transform: translate(-50%,0);
  background-color: rgba(0,0,0,0.5);
  border-radius: 5px;
  color: white;
  padding: 5px;
  border:1px solid lightgray;
`
const LoginWindow = styled.div`
  position:absolute;
  top: 50px;
  right: 40px;
  border: 3px solid black;
  width:300px;
  height: 400px;
  background-color:gray;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  flex-direction:column;
  visibility:hidden;
  label{
    margin-padding:10px;
    font-size:16px;
    letter-spacing:2px;
  }
`
const Login = styled.a`
  background-color: rgba(0,0,0,0,0.6);
  padding:8px 16px;
  text-transform:uppercase;
  letter-spacing:1.5px;
  border:1px solid #f9f9f9;
  border-raduis: 4px;
  transition:all 0.2s ease;
  cursor:pointer;
  &:hover{
    background-color: #f9f9f9;
    color:#000;
    border-color: transparent;
    ${LoginWindow}{
    visibility:visible;}
  }
`
const NavWrapper = styled.nav` 
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #000000;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`
const Logo = styled.a`
  padding: 0;
  width: 70px;
  font-size: 0;
  display:inline-block;
  margin-bottom: 10px;
  img {
    display:block;
    width: 100%;
  }
`

export default Nav