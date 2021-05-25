import React from 'react'
import { ContainerSecActividades } from './style'
const CardSecActividades = ({_id, titulo,fecha, curso}) => {
  return (
    <ContainerSecActividades>
      <span className="titulo">
        {`"${titulo}"`}
      </span>
      <span className="fecha">
        {fecha}
      </span>
      <span className="curso">
        {curso.area}
      </span>
    </ContainerSecActividades>
  )
}

export default CardSecActividades