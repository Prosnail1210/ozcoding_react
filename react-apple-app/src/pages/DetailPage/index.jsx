import axios from "../../api/axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { imageBasePath } from "../../constant"
import './DetailPage.css'
const DetailPage = () => {
  
    const {movieId}=useParams()
    const [movie, setMovie] = useState(null)
    useEffect(()=>{
        async function fetchData() {
            const response = await axios.get(`/movie/${movieId}`)
            setMovie(response.data)
        }
        fetchData()
    },[movieId])
    console.log(movie)
    if(!movie) return null
    return (
        <section className="detail_page">
            <img src={`${imageBasePath}${movie.backdrop_path}`}
            alt="detail"/>
            <div><h2>제목: {movie.title}</h2></div>
            <div><p>&nbsp;{movie.overview}</p></div>
            <div><p>출시일: {movie.release_date}</p></div>
            <div><p>평점: {movie.vote_average}</p></div>
        </section>
    )
}

export default DetailPage