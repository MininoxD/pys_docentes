import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { BodyAuth, ContentLeft, ContentRigth, HeaderMainAuth, MainContainer, OptionsAuth } from './style'
import gez_rigth from '../../statics/img/svg_gez_rigth.svg'
import gez from '../../statics/img/gez.svg'
import { Image } from 'antd'
const Authentication = () => {
  return (
    <BodyAuth>
      <MainContainer>
        <ContentLeft>
          <HeaderMainAuth>
            <div className="novilnone">
              <Image
                width={80}
                height={80}
                src="error"
                fallback={gez}
              />
            </div>
            <OptionsAuth>
               <li><Link to="">Ingresar</Link></li>
               <li><Link to="/register">Registrarse</Link></li>
               <li><Link to="/restore">Recuperar</Link></li>
            </OptionsAuth>
          </HeaderMainAuth>
        <Outlet />
        </ContentLeft>
        <ContentRigth>
          <Image
            width={600}
            height={600}
            src="error"
            fallback={gez_rigth}
          />
        </ContentRigth>
      </MainContainer>
    </BodyAuth>
  )
}

export default Authentication