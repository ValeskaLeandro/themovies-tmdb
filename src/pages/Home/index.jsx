import MovieLists from "../../components/MovieLists"
import { HomeContainer } from "./styled"
import {moviesURL, apiKey, language} from "../../utils/variables"

const Home = () => {
  const topRaterURL = `${moviesURL}top_rated?${apiKey}&${language}`
  const popularMoviesURL = `${moviesURL}popular?${apiKey}&${language}`
  const nowPlayingURL = `${moviesURL}now_playing?${apiKey}&${language}`
  const upcomingMoviesURL = `${moviesURL}upcoming?${apiKey}&${language}`
  
  return(
    <HomeContainer>
      <MovieLists url={topRaterURL} title="Melhores Filmes" id="best"/>
      <MovieLists url={popularMoviesURL} title="Filmes populares" id="popular"/>
      <MovieLists url={upcomingMoviesURL} title="Lançamentos recentes" id="upcoming"/>
      <MovieLists url={nowPlayingURL} title="Em Cartaz" id="nowplaying"/>
    </HomeContainer>
  )
}

export default Home