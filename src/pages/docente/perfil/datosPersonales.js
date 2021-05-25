import React,{useState} from 'react'
import { Descriptions } from 'antd'
import { BoxDatos, CardDatos, FranjaDatos, OptionDato, OptionsDatos } from '../datos/style'
import { AiFillEdit } from 'react-icons/ai'
import Editperfil from './editPerfil'
const Datospersonales = ({nombres, ie, dni, grado, celular}) => {
  const [modal, setModal] = useState(false)
  const Opciones = ()=>(
    <OptionsDatos>
      <OptionDato onClick={()=>setModal(true)}><AiFillEdit/></OptionDato>
    </OptionsDatos>
  )
  return (
    <CardDatos>
      <FranjaDatos tipo={3} />
      <BoxDatos>
        <Descriptions title="Datos del Usuario" extra={<Opciones/>}>
          <Descriptions.Item label="Nombres">{nombres}</Descriptions.Item>
          <Descriptions.Item label="dni">{dni}</Descriptions.Item>
          <Descriptions.Item label="I.E">{ie}</Descriptions.Item>
          <Descriptions.Item label="Grado">{grado}</Descriptions.Item>
          <Descriptions.Item label="Celular">{celular}</Descriptions.Item>
        </Descriptions>
      </BoxDatos>
      <Editperfil show={modal} onHide={() => setModal(false)} editData={{ nombres, ie, dni, grado, celular}}/>
    </CardDatos>
  )
}

export default Datospersonales