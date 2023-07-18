import styled from "styled-components"

export const RecommendationsContainer = styled.div`
  width: 70%;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
    color: var(--ligth-blue);
    margin-bottom: .5rem;
  }

  @media (max-width: 950px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1rem;
    }
  }
`