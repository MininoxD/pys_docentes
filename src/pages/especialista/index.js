import { useMutation, useQuery } from '@apollo/client'
import {  Button, Divider, Popconfirm, Skeleton, Table } from 'antd'
import React from 'react'
import { useState } from 'react'
import { DELETE_EVIDENCIA_SUP, DELETE_PEDAGOGIA_SUP, GET_ITEMS_EVALUACION } from '../../queryApollo/query'
import Formitems from './formItems'
import { ContainerItems } from './style'
import { MdDelete} from 'react-icons/md'
const Especialistas = () => {
  const { loading, error, data } = useQuery(GET_ITEMS_EVALUACION);
  const [deleteEvidencia]=useMutation(DELETE_EVIDENCIA_SUP, {
    refetchQueries:[
      { query: GET_ITEMS_EVALUACION}
    ]
  })
  const [deletePedagigica]=useMutation(DELETE_PEDAGOGIA_SUP, {
    refetchQueries: [
      { query: GET_ITEMS_EVALUACION}
    ]
  })
  const [modal, setModal] = useState(false)
  const [status, setStatus] = useState(true)
  if(loading) {
    return(
      <Skeleton active />
    )
  }

  if (error){
    return(
      <h2>Error :C</h2>
    )
  }

  const confirmEvidencia =(_id)=>{
    deleteEvidencia({
      variables:{ _id}
    })
  }

  const confirmPedagogica =(_id)=>{
    deletePedagigica({
      variables:{ _id}
    })
  }

  const { getEvidencias, getPedagogia} = data
  const columnsE=[
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
      title: 'Opciones',
      key: 'opcion',
      render: ({ _id }) => (
        <Popconfirm
          placement="topRight"
          title="¿Seguro que desea eliminar este item?"
          onConfirm={() => confirmEvidencia(_id)}
          okText="Si"
          cancelText="No"
        ><Button type="primary" shape="circle" icon={<MdDelete />} danger/></Popconfirm>
      )
    }
  ];
  const columnsP=[
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
      title: 'Opciones',
      key: 'opcion',
      render: ({ _id }) => (
        <Popconfirm
          placement="topRight"
          title="¿Seguro que desea eliminar este item?"
          onConfirm={() => confirmPedagogica(_id)}
          okText="Si"
          cancelText="No"
        ><Button type="primary" shape="circle" icon={<MdDelete />} danger/></Popconfirm>
      )
    }
  ];

  const OpenEvidencias =()=>{
    setStatus(true)
    setModal(true)
  }
  const OpenPedagogica =()=>{
    setStatus(false)
    setModal(true)
  }

  return (
    <ContainerItems>
      <Divider><h1>MONITOREO DE LA PRÁCTICA PEDAGÓGICA DOCENTE</h1></Divider>
      <Divider>
        INFORMACIÓN SOBRE LAS PLANIFICACIONES Y EVIDENCIAS DE TRABAJO REMOTO:{` `}
        <Button type="primary" onClick={OpenEvidencias}>Agregar</Button>
        </Divider>
      <Table columns={columnsE} dataSource={getEvidencias} />
      <Divider>
        SOBRE LA PRÁCTICA PEDAGOGICA:{` `}
        <Button type="primary" onClick={OpenPedagogica}>Agregar</Button>
        </Divider>
      <Table columns={columnsP} dataSource={getPedagogia} />
      <Formitems show={modal} onHide={()=>setModal(false)} status={status}/>
    </ContainerItems>
  )
}

export default Especialistas