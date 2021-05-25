import React from 'react'
import { BoxProposito, CardProposito, Franja, OptionProposito, OptionsProposito, BoxHeader, BodyProposito} from './style'
import { IoEyeSharp } from 'react-icons/io5'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { AiFillEdit } from 'react-icons/ai'
import { Popconfirm } from 'antd'
import { useNavigate } from 'react-router'
const CardCurso = ({ _id,area, competencia, estandar, onEdit, onSetEdit, onDelete}) => {
  const navigate = useNavigate()
  const confirmEdit = ()=>{
      onSetEdit()
      onEdit()
  }
  const cancelEdit = ()=>{

  }

  const confirmDelete = ()=>{
      onDelete()
  }
  return (
    <CardProposito>
      <Franja/>
      <BoxProposito>
        <BoxHeader>
          <span>{area}</span>
          <OptionsProposito>
            <OptionProposito onClick={() => navigate(`${_id}`)} ><IoEyeSharp/></OptionProposito>
            <Popconfirm
              title="¿desea editar esta Unidad?"
              onConfirm={confirmEdit}
              onCancel={cancelEdit}
              okText="Si"
              cancelText="Cancelar"
            >
              <OptionProposito><AiFillEdit/></OptionProposito>
            </Popconfirm>
            <Popconfirm
              title="¿desea eliminar esta Unidad?"
              onConfirm={confirmDelete}
              onCancel={cancelEdit}
              okText="Si"
              cancelText="Cancelar"
            >
              <OptionProposito><RiDeleteBin6Fill/></OptionProposito>
            </Popconfirm>
          </OptionsProposito>
        </BoxHeader>
        <BodyProposito>
          <label>competencia</label>
          <span>{competencia}</span>
          <label>Estandar</label>
          <span dangerouslySetInnerHTML={{ __html: estandar }} />
        </BodyProposito>
      </BoxProposito>
    </CardProposito>
  )
}

export default CardCurso