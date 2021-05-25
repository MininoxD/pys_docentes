import styled from "styled-components";

export let BodyAuth = styled.div`
   position: absolute;
   background-color: ${({ theme }) => theme.primary};
   width: 100%;
   height:100vh;
`
export let MainContainer = styled.div`
  display:flex;
`

export let ContentLeft = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  width:100%;
  height: 100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  border-top-right-radius:30px;
  border-bottom-right-radius: 30px;
  overflow:auto;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`
export let ContentRigth = styled.div`
    width: 40%;
    display:none;
  @media screen and (min-width: 768px) {
    display: block;
    padding: 2em;
  }

`
export let HeaderMainAuth = styled.div`
  width:100%;
  height: 6rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:1rem;
  & .novilnone{
    display: none;
  }
  @media screen and (min-width: 769px) {
    & .novilnone{
      display: block;
    }
  }
`
export let OptionsAuth = styled.ul`
  display:flex;
  justify-content:space-evenly;
  list-style:none;
  & li{
    cursor: pointer;
    margin-right:1rem;
  }
  & li >a{
    padding: .3rem;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 3px;
    color: ${({ theme }) => theme.primary};
    :hover{
      color: ${({ theme }) => theme.twoPrimary};
      border: 1px solid ${({ theme }) => theme.twoPrimary};
    }
  }
`
