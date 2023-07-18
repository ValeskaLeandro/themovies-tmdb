import { useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../../components/Card"
import {GenrePage, ContainerMovies, Buttons} from "./styled"
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
//variables
import {genreURL, apiKey, language} from "../../utils/variables"
//hooks
import useFetchMovies from "../../hooks/useFetchMovies"

const Genre = () => {
  const {id, name} = useParams()
  const [page, setPage] = useState(1)
  const searchWithGenreURL = `${genreURL}?${apiKey}&${language}&with_genres=${id}&page=${page}`
  
  const movies = useFetchMovies(searchWithGenreURL)

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