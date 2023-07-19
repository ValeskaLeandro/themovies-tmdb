import styled from "styled-components"

export const MoreMoviesPage= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--ligth-green);
    font-size: 2rem;
    margin: 1rem 0;
  }
  
`

export const Buttons = styled.div`
  
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
  justify-content: center;
  margin-bottom: 2rem;

  button {
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
`
export const ContainerMovies = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem;
  width: 75%;
  max-width: 1800px;
  gap: 1.5rem;
`