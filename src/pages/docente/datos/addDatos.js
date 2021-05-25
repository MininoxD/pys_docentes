import React,{useState} from 'react'
import { Modal } from 'antd'
import { TextEditor } from '../../../components/TextEdit'
import { ADD_CAPACIDAD, ADD_CRITERIO, ADD_DESENPENO, ADD_EVIDENCIA, ADD_META, ONE_PROPOSITO } from '../../../queryApollo/query'
import { useMutation } from '@apollo/client'
import { useParams } from 'react-router'
const Adddatos = ({tipo, show, onHide}) => {
  const { idp } = useParams()
  const [texto, setTexto] = useState(null)
  const tipos = {
    1: ADD_CAPACIDAD,
    2: ADD_CRITERIO,
    3: ADD_DESENPENO,
    4: ADD_EVIDENCIA,
    5: ADD_META
  }
  const mutatio = tipos[tipo]
  const [addDatos,{loading}] = useMutation(mutatio,{
    onCompleted(){
      onHide()
      setTexto(null)
    },
    refetchQueries:[{
      query: ONE_PROPOSITO,
      variables:{
        id:idp
      }
    }]
  })
  const onChange =(e)=>{
    setTexto(e)
  }
  const handleOk = ()=>{
    addDatos({variables:{
      id_p: idp,
      texto
    }})
  }
  return (
    <Modal
      title="Agregar"
      visible={show}
      onCancel={onHide}
      onOk={handleOk}
      confirmLoading={loading}
    >
      <TextEditor onSave={onChange}/>
    </Modal>
  )
}

export default Adddatos