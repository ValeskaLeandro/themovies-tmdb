/* eslint-disable react/prop-types */
import { RecommendationsContainer } from "./styled"
//components
import Card from "../Card"
//Slides
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
//Variables
import { moviesURL, apiKey, language } from "../../utils/variables"
import { settings } from "../../utils/settings"
//Hooks
import useFetchMovies from "../../hooks/useFetchMovies"

const Recommendations = ({id}) => {
  const recomendationURL = `${moviesURL}${id}/recommendations?${apiKey}&${language}`
  const recommendations = useFetchMovies(recomendationURL)

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