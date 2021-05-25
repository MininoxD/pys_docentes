import styled from "styled-components";

export let CardProyectos = styled.div`
  display:flex;
  flex-direction:column;
  background-color:${({ theme }) => theme.secondary};
  box-shadow: 2px 2px 3px rgba(0,0,0,.15);
  border-radius: .5rem;
  padding:.6rem .6rem;
`
export let HeaderCard = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 1px 3px;
`
export let BoxInfo = styled.div`
  display:flex;
  & .icon{
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 2rem;
    height: 2.7rem;
    width: 2.7rem;
    background-color:${({ theme }) => theme.secondaryButtonBkg};
    border-radius:50%;
  }
`
export let InfoProy = styled.div`
  display:flex;
  flex-direction:column;
  margin-left:.5rem;
  & .nombre {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.primaryText};
    font-weight: bold;
  }

  & .duracion {
    font-size: .8rem;
    color: ${({ theme }) => theme.positive};
  }
`
export let CardOptions = styled.div`
  display:flex;
`
export let ItemOption = styled.div`
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
export let BodyCard = styled.div`
  display:flex;
  flex-direction: column;
  & .subTitle{
    font-size: 1rem;
    text-transform: uppercase;
    color:${({ theme }) => theme.titleText};
    font-weight: 600;
  }

  & .textSubtitle {
    font-size: .8rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
