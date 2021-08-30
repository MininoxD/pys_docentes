import React from 'react'
import { Button, Descriptions, PageHeader, Popconfirm } from 'antd'
import { BoxDatos, CardDatos, FranjaDatos } from '../../docente/datos/style'
import { ContainerSearch } from './style'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { useMutation } from '@apollo/client'
import { UPDATE_PROFILE } from '../../../queryApollo/query'
const Searchdatospersonales = ({ _id, nombres, ie, grado, rol}) => {
  console.log(_id);
  console.log(rol);
  const { rolLogin } = useSelector(state => state.user)
  const [updateProfile] = useMutation(UPDATE_PROFILE)
  const navigate = useNavigate()
  const confirEspecialista = () => {
    updateProfile({
      variables:{
        id:_id,
        input: { rol: 4}
      }
    })
  }
  const quitarEspecialista = () => {
    updateProfile({
      variables: {
        id:_id,
        input: { rol: 1 }
      }
    })
  }
  const cencel = () => {

  }
  const Options= ()=>{
    if (rol===1){
      return (
        <Popconfirm
          title="¿Desea darle el rol de especialista a este docente?"
          onConfirm={confirEspecialista}
          onCancel={cencel}
          okText="Si"
          cancelText="Cancelar"
        >
          <Button type="primary">Hacer Especialista</Button>
        </Popconfirm>
      )
    } else{
      return(
        <Popconfirm
          title="¿Desea quitar el rol de especialista a este docente?"
          onConfirm={quitarEspecialista}
          onCancel={cencel}
          okText="Si"
          cancelText="Cancelar"
        >
          <Button type="primary" danger>Quitar Especialista</Button>
        </Popconfirm>
      )
    }

  }
  return (
    <ContainerSearch>
      <PageHeader
        className="site-page-header"
        onBack={() => navigate(`/docente`)}
        title="Volver a mi Perfil"
      />
      <CardDatos>
        <FranjaDatos tipo={3} />
        <BoxDatos>
          <Descriptions title="Datos del Usuario" extra={rolLogin === 3 && <Options/>}>
            <Descriptions.Item label="Nombres">{nombres}</Descriptions.Item>
            <Descriptions.Item label="I.E">{ie}</Descriptions.Item>
            <Descriptions.Item label="Grado">{grado}</Descriptions.Item>
          </Descriptions>
        </BoxDatos>
      </CardDatos>
    </ContainerSearch>
  )
}

export default Searchdatospersonales