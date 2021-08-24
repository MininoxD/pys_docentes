import React, { useEffect, useState } from 'react'
import { Input, Modal } from 'antd';
import { useMutation } from '@apollo/client';
import { UPDATE_ITEM_EVIDENCIA, UPDATE_ITEM_PEDAGOGICO } from '../../../queryApollo/query';

const { TextArea } = Input;
const Inputedit = ({ visible, setVisible, anotaciones,_id, tipo}) => {
  const [evidencia, setEvidencia] = useState(anotaciones)
  const [updateItem, { loading }] = useMutation(tipo ? UPDATE_ITEM_EVIDENCIA : UPDATE_ITEM_PEDAGOGICO,{
    onCompleted:()=>{
      setVisible(false)
      setEvidencia('')
    }
  })


  const onChangeText =(e)=>{
    setEvidencia(e.target.value)
  }

  const handleOk =()=>{
    updateItem(
      {
        variables: { _id, input: { anotaciones: evidencia}}
      }
    )
  }

  const handleCancel =()=>{
    setEvidencia("")
    setVisible(false)
  }
  return (
    <Modal
      title="Agregar anotacion"
      visible={visible}
      onOk={handleOk}
      confirmLoading={loading}
      onCancel={handleCancel}
    >
      <TextArea rows={4} value={evidencia} defaultValue={""+anotaciones} onChange={onChangeText}/>
    </Modal>
  )
}

export default Inputedit