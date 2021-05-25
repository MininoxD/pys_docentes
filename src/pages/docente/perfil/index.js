import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_PROFILE } from '../../../queryApollo/query'
import Alumnos from './alumnos'
import Cursosdocente from './cursosdocente'
import Datospersonales from './datosPersonales'
import { PerfilContainer } from './style'
import { PageHeader, Skeleton } from 'antd'
const Perfil = () => {
  const { loading, error, data } = useQuery(GET_PROFILE);
  if (loading){
    return <Skeleton active/>
  }
  const {alumnos, cursos, ...personales} = data.getOneDocente
  console.log(data);
  return (
    <>
    <PageHeader
      className="site-page-header"
      onBack={() => window.history.back()}
      title="Volver"
    />
    <PerfilContainer>
      <Datospersonales {...personales}/>
      <Cursosdocente datos={cursos}/>
      <Alumnos datos={alumnos}/>
    </PerfilContainer>
    </>
  )
}

export default Perfil