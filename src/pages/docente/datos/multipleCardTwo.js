import React, { useState } from 'react'
import { GrAdd } from 'react-icons/gr';
import Addsesion from './addSesion';
import Sesion from './sesion';
import { BodyDatos, BoxDatos, BoxHeaderDatos, CardDatos, FranjaDatos, OptionDato, OptionsDatos} from './style';
const Multiplecardtwo = ({titulo , datos = [], autor}) => {
  const [modalForm, setModalForm] = useState(false)
  const [editData, setEditData] = useState(null)

  const onEdit =(data)=>{
    setEditData(data)
    setModalForm(true)
  }
  return (
    <CardDatos>
      <FranjaDatos tipo={1} />
      <BoxDatos>
        <BoxHeaderDatos>
          <span>{titulo}</span>
          {
            autor &&
            <OptionsDatos>
              <label>Agregar</label>
              <OptionDato onClick={() => setModalForm(true)}><GrAdd /></OptionDato>
            </OptionsDatos>
          }
        </BoxHeaderDatos>
        <BodyDatos>
            {
            datos.map((ele, i) => <Sesion autor={autor} {...ele} key={i} numero={i} onEdit={() => onEdit(ele)}/>)
            }
        </BodyDatos>
      </BoxDatos>
      <Addsesion show={modalForm} onHide={() => setModalForm(false)} editData={editData} clear={() => setEditData(null)}/>
    </CardDatos>
  )
}

export default Multiplecardtwo