import { useQuery } from '@apollo/client'
import {  Button, Divider, Skeleton, Table } from 'antd'
import React from 'react'
import { useState } from 'react'
import { GET_ITEMS_EVALUACION } from '../../queryApollo/query'
import Formitems from './formItems'
import { ContainerItems } from './style'
const Especialistas = () => {
  const { loading, error, data } = useQuery(GET_ITEMS_EVALUACION, { fetchPolicy: 'no-cache'});
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

  const { getEvidencias, getPedagogia} = data
  const columns=[
    {
      title: 'Items',
      dataIndex: 'item',
      key: 'item',
    },
    {
      title: 'Evidencias',
      dataIndex: 'evidencia',
      key: 'evidencia',
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
      <Divider>
        INFORMACIÓN SOBRE LAS PLANIFICACIONES Y EVIDENCIAS DE TRABAJO REMOTO:
        <Button type="primary" onClick={OpenEvidencias}>Agregar</Button>
        </Divider>
      <Table columns={columns} dataSource={getEvidencias} />
      <Divider>
        SOBRE LA PRÁCTICA PEDAGOGICA
        <Button type="primary" onClick={OpenPedagogica}>Agregar</Button>
        </Divider>
      <Table columns={columns} dataSource={getPedagogia} />
      <Formitems show={modal} onHide={()=>setModal(false)} status={status}/>
    </ContainerItems>
  )
}

export default Especialistas