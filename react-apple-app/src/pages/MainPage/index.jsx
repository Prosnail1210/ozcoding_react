import {styled} from 'styled-components'
import Banner from '../../components/Banner.jsx'
import Row from '../../components/Row.jsx'
import request from '../../api/requests.js'
import Nav from '../../components/Nav.jsx'

const MainPage = () => {

  return (
    <Container>
        <Banner/>
        <Row title = 'Trending Now' id="TN" fetchUrl={request.fetchTrending}/>
        <Row title = 'Top Radted' id="TR" fetchUrl={request.fetchTopRated}/>
        <Row title = 'Action Movies' id="AM" fetchUrl={request.fetchActionMovies}/>
        <Row title = 'Comedy Movies' id="CM" fetchUrl={request.fetchComedyMovies}/>
    </Container>
  )
}
const Container = styled.main`
  position:relative;
  display:block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
`

export default MainPage