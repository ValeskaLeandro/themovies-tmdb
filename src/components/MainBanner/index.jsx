import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import useFetchMovies from "../../hooks/useFetchMovies"

import {apiKey, imageURL, language, moviesURL} from "../../utils/variables"
import { Link } from "react-router-dom"
import { Banner } from "./styled"

const MainBanner = () => {
  const popularMoviesURL = `${moviesURL}upcoming?${apiKey}&${language}`
  const movies = useFetchMovies(popularMoviesURL)
  const top3 = movies.slice(0, 3)
  return(
    <Banner>
      <Swiper 
      modules={[Navigation, Pagination]}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      >
      {top3.length > 0 && top3.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img src={imageURL + movie.backdrop_path} alt={movie.title} />
          </Link>
        </SwiperSlide>
      ))}
      </Swiper>
    </Banner>
  )
}

export default MainBanner