import { useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../../components/Card"
import {MoreMoviesPage, ContainerMovies, Buttons} from "./styled"
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
//variables
import {moviesURL, apiKey, language} from "../../utils/variables"
//hooks
import useFetchMovies from "../../hooks/useFetchMovies"
import { renderSwitcth } from "../../utils/switch";

const MoreMovies = () => {
  const {category} = useParams()
  const [page, setPage] = useState(1)
  const categoryMoviesURL = `${moviesURL}${category}?${apiKey}&${language}&page=${page}`
  
  const movies = useFetchMovies(categoryMoviesURL)
  const title = renderSwitcth(category)
  
  return(
    <MoreMoviesPage>
      {movies &&
        <>
        <h2 className="title">{title}</h2>
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
    </MoreMoviesPage>
  )
}

export default MoreMovies