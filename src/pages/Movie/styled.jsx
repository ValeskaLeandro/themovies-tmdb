import styled from "styled-components"

export const MoviePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MoviePageContent = styled.div`
  width: 70%;
  max-width: 1800px;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  .top {
    display: flex;
    gap: 1.25rem;
    align-items: center;
    margin-bottom: .5rem;

    .title_tagline .tagline {
      opacity: .8;
      font-size: .8rem;
    }
  }
  
  .content_left,
  .content_rigth {
    width: 50%;
  } 

  .content_left img {
    width: 90%;
    max-width: 500px;
  }

  .content_rigth .description {
    font-size: 1.3rem;
    text-align: justify;
    margin-bottom: 1rem; 
    
    p {
      color: var(--ligth-blue);
      font-weight: bold;
    }

    span {
      font-weight: normal;
    }
  }

  @media (max-width: 1250px) {
    width: 100%;
    flex-direction: column;

    .content_left,
    .content_rigth {
      width: 70%;
    } 
    .content_left {
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 950px) {
    width: 90%;
    .content_left,
    .content_rigth {
      width: 100%;
    } 
  }
  
  @media (max-width: 600px) {
    .content_rigth .top .title_tagline h1 {
      font-size: 1.3rem;
    }

    .content_rigth .top .title_tagline .tagline {
      display: none;
    }

    .content_rigth .description {
      font-size: 1rem;
    }
  }
`

export const TitleMovie = styled.h1`
  color: var(--ligth-blue);
  font-size: 1.8rem;
`
export const MovieAverage = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--ligth-blue);
  border-radius: 50%;
  gap: .2rem;
  flex: none;

`
export const MovieGenres = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  gap: .3rem;

  a {
    background-color: var(--ligth-green);
    padding: .2rem .5rem;
    color: #fafafa;
    border-radius: .5rem;
    transition: .4s;
    cursor: pointer;

    &:hover{
      background-color: #5d8d6b;    
    }
  }
`
export const Curiosities = styled.div`
  h1 {
    margin-bottom: 1rem;
  }

  .info {
    margin-bottom: .5rem;
    h3 {
      font-size: 1rem;
      color: var(--ligth-green);
    }

    h3 svg {
      margin-right: .3rem;
    }

  }
  @media (max-width: 600px){
    h1 {
      font-size: 1rem;
    }
  }
`