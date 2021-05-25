import React from 'react'
import Modal from 'antd/lib/modal/Modal'
import { FormModal } from '../../../styles/form'
import { RiInputMethodFill } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { ADD_SESION, ONE_PROPOSITO, ONE_PROYECTO, UPDATE_SESION } from '../../../queryApollo/query';
import { useParams } from 'react-router';
const Addsesion = ({ editData = null, show, onHide}) => {
  const {id,idp} = useParams()
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [addSesion] = useMutation(ADD_SESION, {
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
  ]})
  const [updateSession] = useMutation(UPDATE_SESION)
  if (editData) {
    setValue("titulo", editData.titulo)
    setValue("fecha", editData.fecha)
    setValue("inicio", editData.inicio)
    setValue("desarrollo", editData.desarrollo)
    setValue("cierre", editData.cierre)
    setValue("reflexion", editData.reflexion)
  }
  const onCreate = (data) => {
    const send = { ...data, id_proposito: idp}
    addSesion({ variables: send })
    onHide()
  };

  const onEdit = (data) => {
    updateSession({
      variables: {
        id: editData._id,
        input: data
      }
    })
    onHide()
  }

  return (
    <Modal
      title="Agregar Sesion"
      visible={show}
      onCancel={onHide}
      footer={[]}
    >
      <FormModal>
        <form onSubmit={handleSubmit(editData ? onEdit : onCreate)} >
          <label className={errors.titulo ? "input-icon error" : " input-icon"}>
            <span><RiInputMethodFill />{" "}|{" "}</span>
            <input type="text" placeholder="Titulo de la sesion" {...register("titulo", { required: "Se requiere el titulo" })} />
          </label>
          <span className="text-error">{errors.titulo?.message}</span>

          <label className={errors.fecha ? "input-icon error" : " input-icon"}>
            <span><RiInputMethodFill />{" "}|{" "}</span>
            <input type="date" placeholder="Fecha de la sesion" {...register("fecha", { required: "Se requiere la fecha" })} />
          </label>
          <span className="text-error">{errors.fecha?.message}</span>

          <label className={errors.inicio ? "input-textarea error" : " input-textarea"}>

            <textarea rows="4" type="text" placeholder="Inicio de la sesion" {...register("inicio", { required: "Se requiere el inicio" })} />
          </label>
          <span className="text-error">{errors.inicio?.message}</span>

          <label className={errors.desarrollo ? "input-textarea error" : " input-textarea"}>

            <textarea rows="4" type="text" placeholder="Desarrollo de la sesion" {...register("desarrollo", { required: "Se requiere el desarrollo" })} />
          </label>
          <span className="text-error">{errors.desarrollo?.message}</span>

          <label className={errors.cierre ? "input-textarea error" : " input-textarea"}>

            <textarea rows="4" type="text" placeholder="Cierre de la sesion" {...register("cierre", { required: "Se requiere el cierre" })} />
          </label>
          <span className="text-error">{errors.cierre?.message}</span>

          <label className={errors.reflexion ? "input-textarea error" : " input-textarea"}>

            <textarea rows="4" type="text" placeholder="Reflexion de la sesion" {...register("reflexion", { required: "Se requiere el reflexion" })} />
          </label>
          <span className="text-error">{errors.reflexion?.message}</span>

          {
            editData ?
              <input type="submit" value="Actualizar Datos" />
              :
              <input type="submit" value="Guardar Datos" />
          }

        </form>
      </FormModal>
    </Modal>
  )
}

export default Addsesion