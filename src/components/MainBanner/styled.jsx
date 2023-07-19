import styled from "styled-components"

export const Banner = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  .swiper-slide img{
    width:100%;
    height: 80vh;
    object-fit: cover;
    
    @media (max-width: 1000px) {
      height: 50vh;      
    }
  }


  
`