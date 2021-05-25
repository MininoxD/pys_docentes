import styled from "styled-components";

export let HeaderNav = styled.div`
  padding: .5rem 2rem;
  box-sizing: border-box;
  height: 5rem;
  background-color:${({ theme }) => theme.secondary};
  width: 100%;
  position: sticky;
  z-index: 4;
  top: 0;
`
export let NavBar = styled.nav`
  width:100%;
  height:100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
`
export let Logo = styled.div`
  display:flex;
  align-items:center;
  & span{
    height:3rem;
    font-size: 2.5rem;
  }

  & label{
    font-size: 1.4rem;
    text-transform: uppercase;
  }
`
export let Items = styled.ul`
  display:flex;
  list-style:none;
  align-items:center;

  & li{
    height:1.6rem;
    font-size: 1.3rem;
    margin-left: 1rem;
  }

  & .grande{
    display: none;
  }
  @media screen and (min-width: 768px) {
    & .grande{
      display: block;
    }
  }
`

export let Options = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.secondaryButtonBkg};
  :hover{
    background-color: ${({ theme }) => theme.hoverIcon};
  }
  & svg{
    fill: ${({ theme }) => theme.primaryIcon};
  }
`