import React from 'react'
import { RiInputMethodFill} from 'react-icons/ri'
import { FormModal } from '../../../styles/form';
import { useForm } from 'react-hook-form';
import Modal from 'antd/lib/modal/Modal';
import { useMutation } from '@apollo/client';
import { ADD_PROYECTO, GET_PROYECTOS, UPDATE_PROYECTO } from '../../../queryApollo/query';

const Addproyecto = ({ show, onHide, editData = null }) => {
  const [addProyecto, { data: track, loading }] = useMutation(ADD_PROYECTO,{refetchQueries:[{
    query: GET_PROYECTOS
  }]})
  const [updateProyecto] = useMutation(UPDATE_PROYECTO)

  const { register, handleSubmit, formState: { errors }, setValue} = useForm();
  if(editData){
    setValue("nombre", editData.nombre)
    setValue("grado", editData.grado)
    setValue("fecha_inicio", editData.f_ini)
    setValue("fecha_fin", editData.f_fin)
    setValue("enfoque", editData.enfoque)
    setValue("situacion", editData.situacion)
  }

  const onCreate = (data) => {
    addProyecto({variables: data})
    onHide()
  };

  const onEdit = (data) =>{
    console.log(data)
    updateProyecto({
      variables:{
        id: editData._id,
        input: data
      }
    })

    onHide()
  }
  return (
    <Modal title="Agregar Unidad" visible={show} onCancel={onHide} footer={[]}>
      <FormModal>
      <form onSubmit={handleSubmit(editData?onEdit: onCreate)} >
        {/* {status === 'fail_login' ? <span className="text-error">Datos Incorrectos</span> : null} */}
        <label className={errors.nombre ? "input-icon error" : " input-icon"}>
          <span><RiInputMethodFill />{" "}|{" "}</span>
          <input type="text" placeholder="Nombre de la Unidad" {...register("nombre", { required: "Se requiere el nombre" })} />
        </label>
        <span className="text-error">{errors.nombre?.message}</span>

        <label className={errors.grado ? "input-icon error" : " input-icon"}>
          <span><RiInputMethodFill />{" "}|{" "}</span>
            <select  {...register("grado", { required: "Seleccione un grado" })}>
              <option value="1ro Primaria" selected disabled>Seleccione un grado</option>
              <option value="1ro Primaria">1ro Primaria</option>
              <option value="2do Primaria">2do Primaria</option>
              <option value="3ro Primaria">3ro Primaria</option>
              <option value="4to Primaria">4to Primaria</option>
              <option value="5to Primaria">5to Primaria</option>
              <option value="6to Primaria">6to Primaria</option>
            </select>
        </label>
        <span className="text-error">{errors.grado?.message}</span>
          <span className="text-input">Fecha de Inicio</span>
        <label className={errors.fecha_inicio ? "input-icon error" : " input-icon"}>
          <span><RiInputMethodFill />{" "}|{" "}</span>
          <input type="Date" {...register("fecha_inicio", { required: "Se requiere una fecha de inicio" })} />
        </label>
        <span className="text-error">{errors.fecha_inicio?.message}</span>
          <span className="text-input">Fecha de fin</span>
        <label className={errors.fecha_fin ? "input-icon error" : " input-icon"}>
          <span><RiInputMethodFill />{" "}|{" "}</span>
            <input type="Date" {...register("fecha_fin", { required: "Se requiere una fecha de fin" })} />
        </label>
        <span className="text-error">{errors.fecha_fin?.message}</span>

        <label className={errors.enfoque ? "input-textarea error" : " input-textarea"}>
            <textarea placeholder="Enfoque de la unidad ......" rows="4" {...register("enfoque", { required: "Se requiere una enfoque" })} />
        </label>
        <span className="text-error">{errors.enfoque?.message}</span>

        <label className={errors.situacion ? "input-textarea error" : " input-textarea"}>
            <textarea placeholder="Situacion significativa de la undidad...." rows="4" {...register("situacion", { required: "Se requiere una situacion" })} />
        </label>
        <span className="text-error">{errors.situacion?.message}</span>
        {/* {
          status === 'loading_login' ? <div className="fake-button"><div className="spiner"></div>Guardando....</div>
            : <input type="submit" value="Guardar Datos" />
        } */}
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

export default Addproyecto