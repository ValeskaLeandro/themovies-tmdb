/* eslint-disable react/prop-types */
import Card from "../Card"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { settings } from "../../utils/settings"
import { Container } from "./styled"
import useFetchMovies from "../../hooks/useFetchMovies"
const MovieLists = ({url, title, id}) => {
  const movies = useFetchMovies(url)

  return(
    <Container id={id}>
      <h2 className="title">{title}</h2>      
      <Swiper {...settings}
      >
         {movies.length > 0 && movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Card movie={movie} />
          </SwiperSlide>
          ))}
      </Swiper>
      
   </Container>
  )
}

export default MovieLists