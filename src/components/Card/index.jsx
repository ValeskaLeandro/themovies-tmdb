/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MovieCard } from "./styled";

const imageURL = import.meta.env.VITE_IMG

const Card = ({movie}) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <MovieCard>
        <img src={imageURL + movie.poster_path} alt={movie.title} />
      </MovieCard>
    </Link>
  )
}

export default Card