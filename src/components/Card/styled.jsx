import styled from "styled-components"

export const MovieCard = styled.div`  
  width: auto;
  min-width: 130px;
  transition: all .5s ease;

  img{
    width: 100%;
    max-width: 250px;
    aspect-ratio: 9/16;
  }

  &:hover {
    transform: scale(1.08);
  }
`