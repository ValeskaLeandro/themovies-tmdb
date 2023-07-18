import styled from "styled-components"


export const SearchPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    font-weight: 400;
    margin: 1rem 0;

    .query-text {
      font-weight: bold;
      color: var(--ligth-blue);
      text-transform: uppercase;
    }
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