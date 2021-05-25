import React,{useState} from 'react'
import styled from 'styled-components'
import ItemDrow from './DrowItem'
import { AiOutlineLeft ,AiOutlineQuestion} from 'react-icons/ai'
let Dropdown =  styled.div`
  width: 300px;
  background-color: ${({ theme }) => theme.dropPrimary};
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
  transition: height 1s ease;
  box-shadow: 2px 2px 15px rgba(0,0,0,.5);
`
export const DropDownFb = ({menu=[]}) => {
  const [statemenu, setStateMenu] = useState('main')
  const [subMenu, setSubMenu] = useState([])

  const swapMenu = (key, sub)=>{
    setSubMenu(sub)
    setStateMenu(key)
  }

  return (
    <Dropdown>
      {
          statemenu === 'main'?
            menu.map((m,i)=>{
              return(
                <ItemDrow key={i}iconLeft={m.iconLeft ? m.iconLeft : <AiOutlineQuestion/>} action={m.cascade ? () => swapMenu(m.key, m.subMenu) : m.action} iconRigth={m.cascade} title={m.title}/>
              )
            })
          :
          <>
            <ItemDrow action={() => setStateMenu('main')} title="volver" iconLeft={<AiOutlineLeft/>} />
            {
              subMenu.map((sb,i)=>{
                return(
                  <ItemDrow key={i} iconLeft={sb.iconLeft ? sb.iconLeft : <AiOutlineQuestion />} action={sb.action} title={sb.title} />
                )
              })
            }
          </>
      }
    </Dropdown>
  )
}


