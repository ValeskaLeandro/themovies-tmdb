import styled from "styled-components"

export const Container = styled.div`
  width: 80%;
  max-width: 1800px;
  margin-bottom: 2rem;

  h2 {
    text-transform: uppercase;
    margin-bottom: 1rem;
    color: var(--ligth-green)
  }

  @media (max-width: 1250px) {
    .container {
      width: 95%; 
  }
}
`