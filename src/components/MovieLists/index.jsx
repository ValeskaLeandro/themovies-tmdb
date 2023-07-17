/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Card from "../Card"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"

import { settings } from "../../utils/settings"
import { Container } from "./styled"

const MovieLists = ({url, title, id}) => {
  const [movies, setMovies] = useState([])
  
  const getMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovies(data.results)
  }

  useEffect(() => {getMovies(url)})

  return(
    <Container id={id}>
      <h2 className="title">{title}</h2>      
      <Swiper {...settings}
      >
         {movies.length > 0 && movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            {console.log(movie)}
            <Card movie={movie} />
          </SwiperSlide>
          ))}
      </Swiper>
      
   </Container>
  )
}

export default MovieLists