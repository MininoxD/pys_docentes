import React,{useState} from 'react'
import { useMutation } from '@apollo/client'
import { Popconfirm } from 'antd'
import { GrAdd } from 'react-icons/gr'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { DELETE_ALUMNO, GET_PROFILE } from '../../../queryApollo/query'
import { BodyDatos, BoxDatos, BoxHeaderDatos, CardDatos, ElementDatos, FranjaDatos, OptionDato, OptionsDatos } from '../datos/style'
import Addalumno from './addAlumnos'
import { BoxDatosAlumno, OptionAlumno } from './style'
import { AiFillEdit } from 'react-icons/ai'
const Alumnos = ({datos =[]}) => {
  const [modal, setModal] = useState(false)
  const [editData, setEditData] = useState(null)
  const [deleteAlumno] = useMutation(DELETE_ALUMNO, {
    refetchQueries: [{
      query: GET_PROFILE
    }]
  })

  const confirm =(id)=>{
      deleteAlumno({variables:{id}})
  }

  const onEdit =(alumno)=>{
    setEditData(alumno)
    setModal(true)
  }
  return (
    <CardDatos>
      <FranjaDatos tipo={4} />
      <BoxDatos>
        <BoxHeaderDatos>
          <span>Alumnos</span>
          <OptionsDatos>
            <OptionDato onClick={() => setModal(true)}><GrAdd /></OptionDato>
          </OptionsDatos>
        </BoxHeaderDatos>
        <BodyDatos>
          {
            datos.map((alu, i)=>
              <ElementDatos tipo={4} key={i}>
                <BoxDatosAlumno>
                  <label>{alu.nombres}</label>
                  <span>{`DNI: ${alu.dni}`}</span>
                </BoxDatosAlumno>
              <OptionAlumno>
                  <Popconfirm
                    title="¿Desea editar este Alumno?"
                    onConfirm={() => onEdit(alu)}
                    onCancel={() => console.log("cancelado")}
                    okText="Si"
                    cancelText="No"
                  >
                  <OptionDato><AiFillEdit /></OptionDato>
                  </Popconfirm>
                  <Popconfirm
                    title="¿Desea eliminar este Alumno?"
                    onConfirm={() => confirm(alu._id)}
                    onCancel={() => console.log("cancelado")}
                    okText="Si"
                    cancelText="No"
                  >
                    <OptionDato><RiDeleteBin6Fill /></OptionDato>
                  </Popconfirm>
              </OptionAlumno>
              </ElementDatos>
            )
          }
        </BodyDatos>
      </BoxDatos>
      <Addalumno show={modal} onHide={() => setModal(false)} editData={editData} setData={()=>setEditData(null)}/>
    </CardDatos>
  )
}

export default Alumnos