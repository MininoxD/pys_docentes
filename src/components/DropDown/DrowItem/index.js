import React from 'react'
import styled from 'styled-components'
import {AiOutlineRight} from 'react-icons/ai'

let Item = styled.div`
  width:100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  transition: background .5s;
  padding: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.primaryIcon};
  cursor: pointer;
  &:hover{
    background-color:${({ theme }) => theme.hoverIcon};
  }

  & .icon-button {
    width: 2rem;
    height: 2rem;
    background-color:${({ theme }) => theme.secondaryButtonBkg};
    border-radius: 50%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right: 0.5rem;
  }
  & .icon-button > svg{
     color: ${({ theme }) => theme.primaryIcon}
  }

  & .icon-button:hover {
    filter: none;
  }

  & .icon-right {
    margin-left: auto;
  }
`
const ItemDrow = ({ iconLeft, iconRigth , action=null, title="hola"}) => {
  return (
    <Item onClick={action}>
      <span className="icon-button">{iconLeft}</span>
      {title}
      <span className="icon-right">{iconRigth && <AiOutlineRight />}</span>
    </Item>
  )
}

export default ItemDrow