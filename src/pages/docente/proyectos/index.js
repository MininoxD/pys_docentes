import React,{useState} from 'react'
import Getproyectos from '../../../queryApollo/getProyectos'
import { Button, Divider } from 'antd'
import { GridProy } from './style'
import { AiTwotoneFolderOpen } from 'react-icons/ai'
import Addproyecto from './addProyecto'
const Proyectos = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Divider orientation="center"> <Button type="dashed" icon={<AiTwotoneFolderOpen />} onClick={() => { setModalShow(true) }} >
        Agregar Unidad
        </Button>
      </Divider>
      <GridProy>
        <Getproyectos />
      </GridProy>
      <Addproyecto show={modalShow} onHide={() => { setModalShow(false) }}/>
    </>
  )
}

export default Proyectos