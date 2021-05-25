import styled from "styled-components";

export const PerfilContainer = styled.div`
  padding: 1rem;
  display:grid;
  grid-template-columns: 1fr;
  column-gap: .5rem;
  row-gap: 1rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`
export const BoxDatosAlumno = styled.div`
  display:flex;
  flex-direction:column;

  & label{
    font-size: .9rem;
    text-transform: uppercase;
  }

  & span{
    font-size: .8rem;
  }
`
export const OptionAlumno = styled.div`
  display:flex;
`