import styled from "styled-components";

export let GridSecActividades = styled.div`
  width:100%;
  padding: 1rem;
  display:flex;
  /* grid-template-columns: repeat(1,1fr); */
  /* column-gap: .5rem;
  row-gap: .5rem; */
  overflow-y: auto;

  /* @media screen and (min-width: 650px) {
    grid-template-columns: repeat(6,1fr);
  }

  @media screen and (min-width: 950px) {
    grid-template-columns: repeat(8,1fr);
  } */
`

export const ContainerSecActividades = styled.div`
  height: 17rem;
  width: 12rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:1rem;
  border-radius:1rem;
  margin-right: .7rem;
  background-color:${({ theme }) => theme.secondary};;
  box-shadow: 2px 4px 2px  rgba(0,0,0,.15);
  & .titulo{
    text-transform:uppercase;
    font-size: 1.2rem;
    font-weight: 600;
    text-align:center;
    margin-bottom: .8rem;
  }

  & .fecha{
    text-transform: capitalize;
    font-size: 1.1rem;
    font-style: oblique;
    margin-bottom: .8rem;
  }

  & .curso{
    font-size: 1.2rem;
  }
`