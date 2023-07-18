/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { RecommendationsContainer } from "./styled"

import { settings } from "../../utils/settings"
import Card from "../Card"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const language = "language=pt-BR"

const Recommendations = ({id}) => {
  const [recommendations, setRecommendations] = useState([])
  const recomendationURL = `${moviesURL}${id}/recommendations?${apiKey}&${language}`

  const getMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setRecommendations(data.results)
  }

  useEffect(() => {getMovies(recomendationURL)}, [recomendationURL])

  return(
    <RecommendationsContainer>
      
      {recommendations.length > 0 && (
        <>
          <h1>Recomendações:</h1>
          <Swiper {...settings}>
          {recommendations.length > 0 && recommendations.map((recommendation) => (
          <SwiperSlide key={recommendation.id}>
            <Card movie={recommendation} />
          </SwiperSlide>
          ))}
          </Swiper>
        </>
      )}
    </RecommendationsContainer>
  )
}

export default Recommendations