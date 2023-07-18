import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import Card from "../../components/Card"
import { ContainerMovies, SearchPage } from "./styled"
import { searchURL, apiKey} from "../../utils/variables"

const Search = () => {
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")

  const getSearchedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    
    setMovies(data.results)
  }

  useEffect(() => {
    const searchWithQueryUrl = `${searchURL}?query=${query}&${apiKey}&`  
    
    getSearchedMovies(searchWithQueryUrl)
  }, [query])

  return(
    <SearchPage>
      <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
      <ContainerMovies>
      {movies.length === 0 && <p>Carregando...</p>}
      {movies.length > 0 && movies.map((movie) => <Card key={movie.id} movie={movie} />)}      
      </ContainerMovies>      
    </SearchPage>
  )
}

export default Search