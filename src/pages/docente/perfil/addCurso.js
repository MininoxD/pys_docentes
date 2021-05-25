import { useMutation } from '@apollo/client'
import Modal from 'antd/lib/modal/Modal'
import React from 'react'
import { useForm } from 'react-hook-form'
import { RiInputMethodFill } from 'react-icons/ri'
import { UPDATE_PROFILE } from '../../../queryApollo/query'
import { FormModal } from '../../../styles/form'
const Addcurso = ({show, onHide, oldCursos}) => {
  const [updateProfile] = useMutation(UPDATE_PROFILE)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onCreate = (data)=>{
    const cursos = [...oldCursos, data.curso]
    updateProfile({variables:{
      input:{cursos}
    }})
    onHide()
  }
  return (
    <Modal
      title="Agregar Curso" visible={show} onCancel={onHide} footer={[]}
    >
      <FormModal>
        <form onSubmit={handleSubmit(onCreate)} >
          <label className={errors.curso ? "input-icon error" : " input-icon"}>
            <span><RiInputMethodFill />{" "}|{" "}</span>
            <input type="text" placeholder="Nombre del curso" {...register("curso", { required: "Se requiere el nombre del curso" })} />
          </label>
          <span className="text-error">{errors.curso?.message}</span>
          <input type="submit" value="Guardar" />
        </form>
      </FormModal>
    </Modal>
  )
}

export default Addcurso