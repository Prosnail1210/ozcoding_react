import axios from "../../api/axios"
import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import './SearchPage.css'
import useDebounce from "../../hooks/useDebounce"

const SearchPage = () => {

    let query = new URLSearchParams(useLocation().search)
    const debouncedSearchTerm = useDebounce(query.get('q'),500)
    const [searchResults, setSearchResults] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        if(debouncedSearchTerm){
            fetchSearchMovie(debouncedSearchTerm);
        }else{
            navigate('/main')
        }
    },[debouncedSearchTerm])

    const fetchSearchMovie = async (debouncedSearchTerm) =>{
        try{
            const response = await axios.get(
                `/search/multi?include_adult=false&query=${debouncedSearchTerm}`)
            setSearchResults(response.data.results)
        }catch(error){
            console.log(error)
        }
    }
    if(searchResults.length>0){
        return (
            <section className="search_container">
                {searchResults.map((movie)=>{
                    if(movie.backdrop_path !== null && movie.media_type !=='person'){
                        const movieImageUrl = 'https://image.tmdb.org/t/p/w500'+movie.backdrop_path
                        return(
                            <div className="movie" key={movie.id}>
                                <div onClick={()=>navigate(`/${movie.id}`)}
                                className="movie_column_poster">
                                    <img src={movieImageUrl} alt="movie" className="movie_poster"/>
                                </div>
                            </div>
                        )
                    }
                })}
            </section>
        )
    }else{
        return(
        <section className="no_results">
            <div className="no_results_text">
                <p>
                    찾고자하는 검색어 {debouncedSearchTerm} 에 맞는 영화가 없습니다.
                </p>
            </div>
        </section>
        )
    }
    
}

export default SearchPage