import { ContainerMovies, SearchPage } from "./styled"
import { useSearchParams } from "react-router-dom"
import Card from "../../components/Card"
//variables
import { searchURL, apiKey} from "../../utils/variables"
//hooks
import useFetchMovies from "../../hooks/useFetchMovies"

const Search = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")
  const searchWithQueryUrl = `${searchURL}?query=${query}&${apiKey}`
  
  const movies = useFetchMovies(searchWithQueryUrl)
  
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