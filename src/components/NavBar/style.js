import styled from "styled-components";
import { AutoComplete } from 'antd';

export let HeaderNav = styled.div`
  padding: .3rem .3rem;
  box-sizing: border-box;
  height: 5rem;
  background-color:${({ theme }) => theme.secondary};
  width: 100%;
  position: sticky;
  z-index: 4;
  top: 0;

  @media screen and (min-width: 760px) {
    padding: .5rem 2rem;
  }
`
export let NavBar = styled.nav`
  width:100%;
  height:100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
`
export let Logo = styled.div`
  cursor: pointer;
  display:flex;
  display: none;
  align-items:center;
  & span{
    height:3rem;
    font-size: 2.5rem;
  }

  & label{
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    display: block;
    display:flex;
  }
`
export let Items = styled.ul`
  display:flex;
  list-style:none;
  align-items:center;

  & li{
    height:1.6rem;
    font-size: 1.3rem;
    margin-left: .5rem;
  }

  & .grande{
    display: none;
  }
  @media screen and (min-width: 768px) {
    & .grande{
      display: block;
    }

    & li{
      height:1.6rem;
      font-size: 1.3rem;
      margin-left: 1rem;
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
/* search profile */
export const AutocompleteProfile = styled(AutoComplete)`
  & .ant-select-selector{
    width: 12rem !important;
    @media screen and (min-width: 768px) {
      width: 20rem !important;
    }
  }
`
export const BoxProfile = styled.div`
  display: flex;
  padding: .5rem .2rem;
  background-color: ${({ theme }) => theme.dropHover};
`
export const BoxInfo =  styled.div`
  display: flex;
  flex-direction: column;
  margin-left: .4rem;
  color: ${({ theme }) => theme.dropSecondary};
  & label{
    font-size: 1rem;
  }

  & span {
    font-size: .8rem;
  }
`