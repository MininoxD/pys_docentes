import React from 'react'
import { FcFolder } from 'react-icons/fc'
import { IoEyeSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router'
import { BodyCard, BoxInfo, CardOptions, CardProyectos, HeaderCard, InfoProy, ItemOption } from '../../../queryApollo/style'
const Searchproyectos = ({ _id, grado, fecha_inicio, fecha_fin, nombre, enfoque, situacion}) => {
  let f_ini = new Date(fecha_inicio * 1).toISOString().substring(0, 10)
  let f_fin = new Date(fecha_fin * 1).toISOString().substring(0, 10)
  const navigate = useNavigate()
  return (
    <CardProyectos key={_id}>
      <HeaderCard>
        <BoxInfo>
          <span className="icon">
            <FcFolder />
          </span>
          <InfoProy>
            <span className="nombre">{grado}</span>
            <span className="duracion">Inicio: {f_ini}{" "} Fin: {f_fin}</span>
          </InfoProy>
        </BoxInfo>
        <CardOptions>
          <ItemOption onClick={() => navigate(_id)}><IoEyeSharp /></ItemOption>
        </CardOptions>
      </HeaderCard>
      <BodyCard>
        <span className="subTitle">nombre</span>
        <span className="textSubtitle">{nombre}</span>
        <span className="subTitle">enfoque</span>
        <span className="textSubtitle">{enfoque}</span>
        <span className="subTitle">situacion</span>
        <span className="textSubtitle">{situacion}</span>
      </BodyCard>
    </CardProyectos>
  )
}

export default Searchproyectos