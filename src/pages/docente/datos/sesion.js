import React,{useState} from 'react'
import { Collapse, Popconfirm } from 'antd';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { BoxHeaderSesion, CardDatosTwo, OptionDato, OptionsDatos } from './style';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router';
import { DELETE_SESION, ONE_PROPOSITO, ONE_PROYECTO } from '../../../queryApollo/query';
import { AiFillEdit } from 'react-icons/ai';
const { Panel } = Collapse;
const Sesion = ({ _id, numero, titulo, fecha, inicio, desarrollo, cierre, reflexion, onEdit}) => {
  const { id,idp } = useParams()
  const [showPop, setPopShow] = useState(false)
  const [deletSesion, { loading }] = useMutation(DELETE_SESION, {
    onCompleted() {
      setPopShow(false)
    },
    refetchQueries: [{
      query: ONE_PROPOSITO,
      variables: {
        id: idp
      }
    },
      {
        query: ONE_PROYECTO,
        variables: { id }
      }
  ]
  })

  function callback(key) {
    console.log(key);
  }
  return (
    <Collapse
      onChange={callback} defaultActiveKey={[]}
    >
      <Panel header={titulo} key={numero} >
      <CardDatosTwo>
        <BoxHeaderSesion>
          <span></span>
          <OptionsDatos>
            <Popconfirm
              title="¿Desea editar la sesion?"
              onConfirm={onEdit}
              onCancel={()=>console.log("cancelado")}
              okText="Si"
            >
            <OptionDato><AiFillEdit /></OptionDato>
            </Popconfirm>
            <Popconfirm
              title="¿Desea eliminar la sesion?"
              visible={showPop}
              onConfirm={() =>  deletSesion({ variables: { id: _id } })}
              okButtonProps={{ loading }}
              onCancel={() => setPopShow(false)}
            >
            <OptionDato onClick={()=>setPopShow(true)}><RiDeleteBin6Fill /></OptionDato>
            </Popconfirm>
          </OptionsDatos>
        </BoxHeaderSesion>
        <label>Fecha:</label>
        <span>{fecha}</span>
        <label>Inicio:</label>
        <span>{inicio}</span>
        <label>Desarrollo:</label>
        <span>{desarrollo}</span>
        <label>Cierre:</label>
        <span>{cierre}</span>
        <label>Reflexion:</label>
        <span>{reflexion}</span>
      </CardDatosTwo>
    </Panel>
    </Collapse>
  )
}

export default Sesion