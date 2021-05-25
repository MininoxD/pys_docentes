import styled from "styled-components";

export let GridProy = styled.div`
  width:100%;
  padding: 1rem;
  display:grid;
  grid-template-columns: repeat(1,1fr);
  column-gap: .5rem;
  row-gap: .5rem;

  @media screen and (min-width: 650px) {
    grid-template-columns: repeat(2,1fr);
  }

  @media screen and (min-width: 950px) {
    grid-template-columns: repeat(4,1fr);
  }
`