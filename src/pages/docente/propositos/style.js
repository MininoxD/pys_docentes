import styled from "styled-components";

export const ConteinerHeader = styled.div`
  width: 100%;
  padding: .5rem 1rem;
`
export let GridPropositos = styled.div`
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

export const  CardProposito = styled.div`
  display:flex;
  border-radius: .3rem;
   background-color:${({ theme }) => theme.secondary};
  box-shadow: 2px 2px 3px rgba(0,0,0,.15);
`
export const Franja = styled.div`
  border-top-left-radius:  .3rem;
  border-bottom-left-radius: .3rem;
  background-color: #ECA711;
  width: .4rem;
`
export const BoxProposito = styled.div`
  width:100%;
  padding: .5rem;
  display:flex;
  flex-direction:column;
`
export const BoxHeader = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom: 3px;
  box-shadow: 0px 1.6px    rgba(0,0,0,.15);
  & span{
    font-size: 1.1rem;
    text-transform:uppercase;
    font-weight:600;
  }
`
export const OptionsProposito = styled.div`
  display:flex;
`
export let OptionProposito = styled.div`
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
export const BodyProposito = styled.div`
  display:flex;
  flex-direction: column;
  & label{
    font-size: .95rem;
    font-weight:600;
    font-style: oblique;
    text-transform:uppercase;
  }
  & span{
    font-size: .8rem;
  }
`
export const TituloSecuencia=  styled.h2`
  text-align: center;
  font-size: 1.3rem;
  font-weight:600;
  font-style: oblique;
  text-transform:uppercase;
  color: ${({ theme }) => theme.primary};
`