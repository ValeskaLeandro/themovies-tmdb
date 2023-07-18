import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { BsGraphUp, BsWallet2, BsHourglassSplit } from "react-icons/bs"
import { MoviePage, MoviePageContent, MovieAverage, MovieGenres, Curiosities, TitleMovie } from "./styled"
import Recommendations from "../../components/Recommendations"
import {moviesURL, imageURL, apiKey, language} from "../../utils/variables"

const Movie = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)
  }

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}&${language}`

    getMovie(movieURL)
  }, [id])

  const formatCurrency = (number) =>{
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }
  return(
    <>
      <MoviePage>
        {movie && (
          <>
            
            <MoviePageContent> 
              <div className="content_left">
                <img src={`${imageURL + movie.poster_path}`} alt={movie.title} />
              </div>
              <div className="content_rigth">
                <div className="top">
                  <MovieAverage> {movie.vote_average.toFixed(1)}</MovieAverage>
                  <div className="title_tagline">
                    <TitleMovie>{movie.title}</TitleMovie>
                    <p className="tagline">{movie.tagline}</p>
                  </div> 
                </div>            
                  
                <MovieGenres>
                  {movie.genres.map((genre) => <Link to={`/genre/${genre.id}/${genre.name}`} key={genre.id}>{genre.name}</Link>)}
                </MovieGenres>
                
                <div className="description">
                  <p>Descrição: <span>{movie.overview}</span></p>
                </div>
                <Curiosities>
                  <TitleMovie>Curiosidades</TitleMovie>
                  <div className="info">
                    <h3><BsWallet2 /> Orçamento:</h3>
                    <p>{formatCurrency(movie.budget)}</p>
                  </div>        
                  <div className="info">
                    <h3><BsGraphUp /> Faturamento:</h3>
                    <p>{formatCurrency(movie.revenue)}</p>
                  </div>        
                  <div className="info">
                    <h3><BsHourglassSplit /> Duração:</h3>
                    <p>{movie.runtime} minutos</p>
                  </div>
                </Curiosities>
              </div>
            </MoviePageContent>          
            <Recommendations id={movie.id} />
          </>
        )}
      </MoviePage>
    </>
  )
}

export default Movie