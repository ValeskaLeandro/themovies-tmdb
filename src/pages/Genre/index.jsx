import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../../components/Card"
import {GenrePage, ContainerMovies, Buttons} from "./styled"
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const genreURL = import.meta.env.VITE_SEARCH_GENRE
const apiKey = import.meta.env.VITE_API_KEY
const language = "language=pt-BR"

const Genre = () => {
  const {id, name} = useParams()
  const [movies, setMovies] = useState(null)
  const [page, setPage] = useState(1)
  const searchWithGenreURL = `${genreURL}?${apiKey}&${language}&with_genres=${id}&page=${page}`

  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    
    setMovies(data.results)
  }

  useEffect(() => {
    getMovie(searchWithGenreURL)
  }, [searchWithGenreURL])

  return(
    <GenrePage>
      {movies &&
        <>
        <h2 className="title">Resultados para: <span className="query-text">{name}</span></h2>
        <ContainerMovies>
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 && movies.map((movie) => <Card key={movie.id} movie={movie} />)}      
      </ContainerMovies>
        <Buttons>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}><MdKeyboardArrowLeft /></button> 
        {page}
        <button onClick={() => setPage(page + 1)}><MdKeyboardArrowRight /></button>
        </Buttons>
        </>
      }
    </GenrePage>
  )
}

export default Genre