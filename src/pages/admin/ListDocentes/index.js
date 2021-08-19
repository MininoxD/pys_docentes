import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_DOCENTES } from '../../../queryApollo/query';
import { List, Skeleton, Divider, Descriptions } from 'antd';
import { ContainerListDocentes } from '../../auth/registerGoogle/style';
const ListDocentes = () => {
  const { loading, error, data } = useQuery(GET_DOCENTES, { fetchPolicy: 'no-cache' , variables: { rol: 4}});
  console.log(data);
  if (loading){
    return(
      <Skeleton active />
    )
  }
  if (error){
    return(
      <h1>error :c ...</h1>
    )
  }

  const { getDocentes} = data
  return (
    <ContainerListDocentes>
        <Divider>Lista de Especialistas</Divider>
        <List
          itemLayout="horizontal"
          dataSource={getDocentes}
          renderItem={docente => (
            <Descriptions title={docente.nombres}>
              <Descriptions.Item label="DNI">{docente.dni}</Descriptions.Item>
              <Descriptions.Item label="Celular">{docente.celular}</Descriptions.Item>

            </Descriptions>
          )}
        />

    </ContainerListDocentes>
  )
}

export default ListDocentes