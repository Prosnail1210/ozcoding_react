import { useEffect } from 'react'
import { useState } from 'react'
import {styled} from 'styled-components'
import Banner from './components/Banner.jsx'

function App() {
  const [show, setShow] = useState("false")
  const listener=()=>{
    if(window.scrollY>50)
      setShow("true")
    else
      setShow("false")
  }
  useEffect(()=>{
    window.addEventListener('scroll',listener)
    return ()=>{
      window.removeEventListener('scroll',listener)
    }
  },[])

  return (
    <Container>
      <NavWrapper $show={show}>
        <Logo>
          <img 
            alt="logo"
            src='/images/apple-logo.png'
            onClick={()=>window.location.href='/'}
          />
        </Logo>
      </NavWrapper>
      <Banner/>
    </Container>
  )
}const Container = styled.main`
  position:relative;
  display:block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
`

const NavWrapper = styled.nav` 
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${props => props.$show==="true"? "#000000" : "#000000"};
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


export default App
