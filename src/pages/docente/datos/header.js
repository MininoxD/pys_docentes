import React from 'react'
import { Descriptions,  PageHeader } from 'antd'
import { ContainerDatosHeader } from './style'
import { useNavigate, useParams } from 'react-router'
const HeaderDatos = ({ area, competencia, estandar, instrumento_evaluacion, autor}) => {
  const {id} = useParams()
  const {id_d} = useParams()
  const navigate = useNavigate()
  return (
    <ContainerDatosHeader>
      <PageHeader
        className="site-page-header"
        onBack={() => navigate(autor ? `/docente/${id}` : `/perfil/${id_d}/${id}`)}
        title={`${area}`}
      />
      <Descriptions title="Decripcion del Proposito" bordered>
        <Descriptions.Item label="Competencia" span={3}>
          {competencia}
        </Descriptions.Item>
        <Descriptions.Item label="Estandar" span={3}>
          <span dangerouslySetInnerHTML={{ __html: estandar }} />
        </Descriptions.Item>
        <Descriptions.Item label="Instrumento de Evaluacion" span={3}>
          {instrumento_evaluacion}
        </Descriptions.Item>
      </Descriptions>
    </ContainerDatosHeader>
  )
}

export default HeaderDatos