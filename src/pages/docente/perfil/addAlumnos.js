import { useMutation } from '@apollo/client';
import Modal from 'antd/lib/modal/Modal'
import React from 'react'
import { useForm } from 'react-hook-form';
import { RiInputMethodFill } from 'react-icons/ri';
import { ADD_ALUMNO, GET_PROFILE, UPDATE_ALUMNO } from '../../../queryApollo/query';
import { FormModal } from '../../../styles/form'
const Addalumno = ({ show, onHide, editData = null, setData}) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [addAlumno,{loading: AddLoading}] = useMutation(ADD_ALUMNO,{refetchQueries:[{
    query:GET_PROFILE
  }],onCompleted(){
    onHide()
  }})

  const [updateAlumno,{loading: UpdateLoading}] = useMutation(UPDATE_ALUMNO,{onCompleted(){
    setData()
    onHide()
  }})
  if (editData) {
    setValue("nombres", editData.nombres)
    setValue("dni", editData.dni)
  }

  const onCreate = (data) => {
    addAlumno({variables:data})
  }

  const onEdit =(input)=>{
    updateAlumno({variables:{id:editData._id, input}})
  }
  return (
    <Modal
      title="Agregar Curso"
      visible={show}
      onCancel={onHide}
      footer={[]}
    >
      <FormModal>
        <form onSubmit={handleSubmit(editData ? onEdit : onCreate)} >
          <label className={errors.nombres ? "input-icon error" : " input-icon"}>
            <span><RiInputMethodFill />{" "}|{" "}</span>
            <input type="text" placeholder="Nombre completo del alumno" {...register("nombres", { required: "Se requiere el nombre del alumno" })} />
          </label>
          <span className="text-error">{errors.nombres?.message}</span>
          <label className={errors.dni ? "input-icon error" : " input-icon"}>
            <span><RiInputMethodFill />{" "}|{" "}</span>
            <input type="text" placeholder="Numero de DNI"
            {...register("dni", {
              required: "Se requiere el numero de DNI",
              pattern: { value: /^[0-9]+$/,message:"Solo se requiere numeros"} ,
              maxLength:{value: 8, message:"Meximo son 8 digitos"},
              minLength:{value:8, message: "Son 8 digitos"}})} />
          </label>
          <span className="text-error">{errors.dni?.message}</span>
          {
            editData ? UpdateLoading ? <div className="fake-button"><div className="spiner"></div>Actualizando...</div> : <input type="submit" value="Actualizar Datos" />
              : AddLoading ? <div className="fake-button"><div className="spiner"></div>Guardando...</div> : <input type="submit" value="Guardar" />
          }
        </form>
      </FormModal>
    </Modal>
  )
}

export default Addalumno