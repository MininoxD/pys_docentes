import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_DOCENTE_ID } from '../../../queryApollo/query';
import { Skeleton } from 'antd';
import Searchdatospersonales from './searchDatosPersonales';
import { GridProy } from '../../docente/proyectos/style';
import Searchproyectos from './searchProyectos';
import { useParams } from 'react-router';

const PerfilProyectos = () => {
  const {id_d} = useParams()
  const { loading, error, data } = useQuery(GET_DOCENTE_ID, {variables:{id:id_d}, fetchPolicy: 'network-only'})
  if (loading){
    return(<Skeleton active/>)
  }
  if(error){
    return <h1>Actualizando</h1>
  }

  const { _id: id_docente , proyectos, ...datosper} = data.getDocenteId

  return (
    <>
      <Searchdatospersonales {...datosper}/>
      <GridProy>
        {
          proyectos.map((pro, i) => <Searchproyectos key={i} {...pro} id_docente={id_docente}/>)
        }
      </GridProy>
    </>
  )
}

export default PerfilProyectos