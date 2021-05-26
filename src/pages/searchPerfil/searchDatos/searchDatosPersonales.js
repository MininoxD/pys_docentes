import React from 'react'
import { Descriptions, PageHeader } from 'antd'
import { BoxDatos, CardDatos, FranjaDatos } from '../../docente/datos/style'
import { ContainerSearch } from './style'
import { useNavigate } from 'react-router'
const Searchdatospersonales = ({ _id, nombres, ie, grado}) => {
  const navigate = useNavigate()
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
          <Descriptions title="Datos del Usuario">
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