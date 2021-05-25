import styled from "styled-components";

export const ContainerDatosHeader =  styled.div`
  width: 100%;
  padding: .5rem 1rem;
`
/* cardDatos */
export let GridDatos = styled.div`
  width:100%;
  padding: 1rem;
  display:grid;
  grid-template-columns: repeat(1,1fr);
  column-gap: .5rem;
  row-gap: .5rem;

  @media screen and (min-width: 650px) {
    grid-template-columns: repeat(3,1fr);
  }

  @media screen and (min-width: 950px) {
    grid-template-columns: repeat(4,1fr);
  }
`
export const CardDatos = styled.div`
  display:flex;
  border-radius: .3rem;
   background-color:${({ theme }) => theme.secondary};
  box-shadow: 2px 2px 3px rgba(0,0,0,.15);
`
export const FranjaDatos = styled.div`
  border-top-left-radius:  .3rem;
  border-bottom-left-radius: .3rem;
  ${({ tipo }) => {
    switch (tipo) {
      case 1:
        return "background-color: #0734EF;"
      case 2:
        return "background-color: #BD3506;"
      case 3:
        return "background-color: #2EAC09;"
      case 4:
        return "background-color: #8E35E7;"
      case 5:
        return "background-color: #EBA727;"
      default:
        return "background-color: #EBA727;"
    }
  }}
  width: .4rem;
`
export const BoxDatos = styled.div`
  width:100%;
  padding: .5rem;
  display:flex;
  flex-direction:column;
`
export const BoxHeaderDatos = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom: 3px;
  box-shadow: 0px 1.6px    rgba(0,0,0,.15);
  margin-bottom: .7rem;
  & span{
    font-size: 1.1rem;
    text-transform:uppercase;
    font-weight:600;
  }
`
export const BoxHeaderSesion = styled.div`
  display:flex;
  justify-content:space-between;
  padding:.5rem 0;
  box-shadow: 0px 1.6px    rgba(0,0,0,.15);
  & span{
    font-size: 1.1rem;
    text-transform:uppercase;
    font-weight:600;
  }
`

export const OptionsDatos = styled.div`
  display:flex;
`
export let OptionDato = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left: .3rem;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color:${({ theme }) => theme.secondaryButtonBkg};
  :hover{
    background-color:${({ theme }) => theme.hoverIcon};
  }
  & svg{
    fill: ${({ theme }) => theme.secondaryText}
  }
`


export const BodyDatos = styled.div`
  display:flex;
  flex-direction: column;
`

export const ElementDatos = styled.div`
  display: flex;
  justify-content:space-between;
  padding: .5rem;
  border-bottom: 1px;
  margin-bottom:1rem;

  ${({ tipo }) => {
    switch (tipo) {
      case 1:
        return "box-shadow: 3px 4px 2px rgba(40,79,241,.25);"
      case 2:
        return "box-shadow: 3px 4px 2px rgba(200,98,63,.25);"
      case 3:
        return "box-shadow: 3px 4px 2px rgba(74,184,42,.25);"
      case 4:
        return "box-shadow: 3px 4px 2px rgba(158,77,240,.25);"
      case 5:
        return "box-shadow: 3px 4px 2px rgba(236,173,55,.25);"
      default:
        return "box-shadow: 3px 4px 2px rgba(236,173,55,.25);"
    }
  }}
  border-radius: 2px;
  & .texto{
    max-width: 87%;
  }
`
export const CardDatosTwo = styled.div`
  display:flex;
  flex-direction:column;
  & label{
    font-size: .9rem;
    color: #0734EF;
    text-transform:uppercase;
    font-weight:600;
  }

  & span{
    font-size: .8rem;
    margin-left: .3rem;
  }
`