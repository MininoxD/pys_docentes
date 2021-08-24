import { useMutation, useQuery } from '@apollo/client'
import { Alert, Button, Descriptions, Divider, PageHeader, Skeleton, Switch, Table } from 'antd'
import React, { useState } from 'react'
import { AiFillCheckCircle, AiFillEdit } from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom'
import { GET_ONE_SUPERVERCION, UPDATE_ITEM_EVIDENCIA, UPDATE_ITEM_PEDAGOGICO } from '../../../queryApollo/query'
import Inputedit from './InputEdit'
import { ContainerSupervicion, EditIcon } from './style'
const Supervicion = () => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const [datos, setDatos] = useState({ anotaciones:"", _id:"", tipo:true})
  const {id_super}= useParams()
  const { loading, error, data} = useQuery(GET_ONE_SUPERVERCION, {
    variables: {
      _id: id_super
    }
  })

  const [updateItemevi,{ loading: loginEvidencia}] = useMutation(UPDATE_ITEM_EVIDENCIA)
  const [updateItepeda, { loading: loginPedagogica }] = useMutation(UPDATE_ITEM_PEDAGOGICO)
  if (loading){
    return(
      <Skeleton active/>
    )
  }

  if(error){
    return(
      <h2>Error :c </h2>
    )
  }

  const onOpenEdit =(datos)=>{
    setDatos(datos)
    setVisible(true)
  }

  const columnsE = [
    {
      title: 'Items',
      dataIndex: 'item',
      key: 'item',
    },
    {
      title: 'Evidencias',
      dataIndex: 'evidencia',
      key: 'evidencia',
    },
    {
      title: 'Estado',
      key: 'estado',
      render: ({ _id,estado}) => (
        <Switch
          checkedChildren="SI"
          unCheckedChildren="NO"
          checked={estado}
          onChange={() => updateItemevi({ variables: { _id, input:{estado: !estado}}})}
          loading={loginEvidencia}
        />
      )
    },
    {
      title: 'Anotaciones',
      key: 'anotaciones',
      render: ({ _id, anotaciones})=>(
        <Alert
          description={anotaciones === '' ? 'Agregue anotacion' : anotaciones}
          type="error"
          action={
            <EditIcon><AiFillEdit onClick={() => onOpenEdit({ _id, anotaciones, tipo: true })}/></EditIcon>
          }
        />
      )
    }
  ];
  const columnsP = [
    {
      title: 'Items',
      dataIndex: 'item',
      key: 'item',
    },
    {
      title: 'Evidencias',
      dataIndex: 'evidencia',
      key: 'evidencia',
    },
    {
      title: 'Estado',
      key: 'estado',
      render: ({ _id, estado }) => (
        <Switch
          checkedChildren="SI"
          unCheckedChildren="NO"
          checked={estado}
          onChange={() => updateItepeda({ variables: { _id, input: { estado: !estado } } })}
          loading={loginPedagogica}
        />
      )
    },
    {
      title: 'Anotaciones',
      key: 'anotaciones',
      render: ({ _id, anotaciones }) => (
        <Alert
          description={anotaciones === '' ? 'Agregue anotacion' : anotaciones}
          type="error"
          action={
            <EditIcon><AiFillEdit onClick={() => onOpenEdit({ _id, anotaciones, tipo:false})} /></EditIcon>
          }
        />
      )
    }
  ];
  const { docente, proyecto, supervisor, evidencias, pedagogicos } = data.getOneSupervicion
  return (
    <ContainerSupervicion>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="Volver"
      />
      <Divider><h2>FICHA DE MONITOREO DE LA PRÁCTICA PEDAGÓGICA DOCENTE</h2></Divider>
      <Descriptions title="Informacion General">
        <Descriptions.Item label="Nombre de IE">{docente.ie}</Descriptions.Item>
        <Descriptions.Item label="Grado">{docente.grado}</Descriptions.Item>
        <Descriptions.Item label="Nombre del Docente">{docente.nombres}</Descriptions.Item>
        <Descriptions.Item label="Celular">{docente.celular}</Descriptions.Item>
        <Descriptions.Item label="DNI">{docente.dni}</Descriptions.Item>
        <Descriptions.Item label="Nombre del Proyecto">{proyecto.nombre}</Descriptions.Item>
        <Descriptions.Item label="Fecha Inicio">{proyecto.fecha_inicio}</Descriptions.Item>
        <Descriptions.Item label="Fecha FIn">{proyecto.fecha_fin}</Descriptions.Item>
        <Descriptions.Item label="Nombre del Supervisor">{supervisor.nombres}</Descriptions.Item>
        <Descriptions.Item label="DNI Supervisor">{supervisor.dni}</Descriptions.Item>
        <Descriptions.Item label="Celular supervisor">{supervisor.celular}</Descriptions.Item>
      </Descriptions>

      <Divider>
        INFORMACIÓN SOBRE LAS PLANIFICACIONES Y EVIDENCIAS DE TRABAJO REMOTO
      </Divider>
      <Table columns={columnsE} dataSource={evidencias} />

      <Divider>
        SOBRE LA PRÁCTICA PEDAGOGICA
      </Divider>
      <Table columns={columnsP} dataSource={pedagogicos} />
      <Inputedit visible={visible} setVisible={setVisible} {...datos}/>
    </ContainerSupervicion>
  )
}

export default Supervicion