import React from 'react'
import { useMutation } from '@apollo/client';
import { RiInputMethodFill } from 'react-icons/ri';
import { ADD_EVIDENCIA_SUP, ADD_PEDAGOGIA_SUP, GET_ITEMS_EVALUACION } from '../../queryApollo/query';
import Modal from 'antd/lib/modal/Modal'
import { FormModal } from '../../styles/form'
import { useForm } from 'react-hook-form';
const Formitems = ({ show, onHide, status}) => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const [addPedagogia] = useMutation(ADD_PEDAGOGIA_SUP, {
    refetchQueries: [
      {
        query: GET_ITEMS_EVALUACION,
      }
    ]
  })

  const [addEvidencia] = useMutation(ADD_EVIDENCIA_SUP, {
    refetchQueries: [
      {
        query: GET_ITEMS_EVALUACION,
      }
    ]
  })

  const saveEvidencia =(data)=>{
    addEvidencia({variables:data})
    onHide()
  }

  const savePedagogia = (data)=>{
    addPedagogia({variables:data})
    onHide()
  }

  return (
    <Modal
      title={status? `Agregar Evidencia` : `Agregar Pedagogia`}
      visible={show}
      onCancel={onHide}
      footer={[]}
    >
      <FormModal>
        <form onSubmit={handleSubmit(status ? saveEvidencia : savePedagogia)} >
          <label className={errors.item ? "input-icon error" : " input-icon"}>
            <span><RiInputMethodFill />{" "}|{" "}</span>
            <input type="text" placeholder="Items" {...register("item", { required: "Se requiere el item" })} />
          </label>
          <span className="text-error">{errors.item?.message}</span>

          <label className={errors.evidencia ? "input-icon error" : " input-icon"}>
            <span><RiInputMethodFill />{" "}|{" "}</span>
            <input type="text" placeholder="Evidencia" {...register("evidencia", { required: "Se requiere la evidencia" })} />
          </label>
          <span className="text-error">{errors.evidencia?.message}</span>
          <input type="submit" value="Guardar Datos" />
        </form>
      </FormModal>
    </Modal>
  )
}

export default Formitems