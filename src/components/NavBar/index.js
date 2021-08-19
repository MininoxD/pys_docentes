import { Avatar, Dropdown, Image } from 'antd'
import React from 'react'
import { HeaderNav, Items, Logo, NavBar, Options } from './style'
import { IoDocumentAttachSharp} from 'react-icons/io5'
import { BsFillCaretDownFill} from 'react-icons/bs'
import {DropDownFb} from '../DropDown'
import { FiUser} from 'react-icons/fi'
import { RiDoorClosedLine} from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { LogOut } from '../../store/user'
import { useNavigate } from 'react-router'
import gez from '../../statics/img/gez.svg'
import ProfileSearch from './profileSearch'
import Usuario from '../../statics/img/usuario.svg'
import { HiClipboardList} from 'react-icons/hi'
const NavHeader = () => {
  const navigate = useNavigate()
  const { nombre, photo, rolLogin } = useSelector(state => state.user)
  const dispatch = useDispatch()
  const Cerrar = async()=>{
    await dispatch(
      LogOut()
    )
    await window.location.reload()
  }

  const menuDrow = [
    {
      key: "1",
      iconLeft: <FiUser />,
      title: "Mi Perfil",
      cascade: null,
      action: () => navigate('perfil')
    },
    {
      key: "2",
      iconLeft: <RiDoorClosedLine />,
      title: "Cerrar Sesion",
      cascade: null,
      action: () => Cerrar()
    },
  ]

  if (rolLogin===4){
    menuDrow.push(
      {
        key: "2",
        iconLeft: <HiClipboardList />,
        title: "Monitoreo",
        cascade: null,
        action: () => navigate('/docente/monitoreo')
      }
    )
  }
  return (
    <HeaderNav>
      <NavBar>
          <Logo>
            <span><IoDocumentAttachSharp/></span>
          <Image
            width={70}
            height={70}
            src="error"
            fallback={gez}
          />
          </Logo>
          <Items>
            <li>
            <ProfileSearch />
            </li>
            <li>
            <Avatar size={40} src={photo ? photo : Usuario}/>
            </li>
          <li className="grande"><p>{nombre}</p></li>
            <li>
              <Dropdown overlay={<DropDownFb menu={menuDrow} />} trigger={['click']}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  <Options>
                    <BsFillCaretDownFill />
                  </Options>
                </a>
              </Dropdown>
            </li>
          </Items>
      </NavBar>
    </HeaderNav>
  )
}

export default NavHeader