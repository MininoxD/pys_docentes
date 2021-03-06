import React from 'react'
import { Descriptions, Divider, PageHeader, Button } from 'antd'
import { ImBook} from 'react-icons/im'
import { ConteinerHeader } from './style'
import { useNavigate, useParams } from 'react-router'

const HeaderPropositos = ({ nombre, situacion, enfoque, onShow, autor}) => {
  const navigate = useNavigate()
  const {id_d} = useParams()
  return (
    <ConteinerHeader>
      <PageHeader
        className="site-page-header"
        onBack={() => navigate(autor ? `/docente` : `/perfil/${id_d}`)}
        title={`Nombre del proyecto: ${nombre}`}
      />
      <Descriptions title="Decripcion del Proposito" bordered>
        <Descriptions.Item label="Situacion Significativa" span={3}>
          {situacion}
        </Descriptions.Item>
        <Descriptions.Item label="Enfoque" span={3}>
          {enfoque}
        </Descriptions.Item>
      </Descriptions>
      {
        autor &&
        <Divider orientation="center"> <Button type="dashed" icon={<ImBook />} onClick={onShow} >
          Agregar Curso
          </Button>
        </Divider>
      }
    </ConteinerHeader>
  )
}

export default HeaderPropositos