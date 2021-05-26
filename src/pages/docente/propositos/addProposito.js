import React, { useState } from 'react'
import Modal from 'antd/lib/modal/Modal'
import { useForm } from 'react-hook-form';
import { RiInputMethodFill } from 'react-icons/ri';
import { TextEditor } from '../../../components/TextEdit';
import { FormModal } from '../../../styles/form';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_PROPOSITO, GET_PROFILE, ONE_PROYECTO, UPDATE_PROPOSITO } from '../../../queryApollo/query';
import { useParams } from 'react-router';
import { Skeleton } from 'antd';
const Addproposito = ({ show, onHide, editData = null, clear}) => {
  const {id} = useParams()
  const [defecto, setDefecto] = useState('selecciones una opcion')
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const { loading: CursosLoading, error, data } = useQuery(GET_PROFILE);

  if (editData) {
    setValue("area", editData.area)
    setValue("competencia", editData.competencia)
    setValue("instrumento_evaluacion", editData.instrumento_evaluacion)
  }
  const [addProposito] = useMutation(ADD_PROPOSITO, {
    refetchQueries: [{
      query: ONE_PROYECTO,
      variables: {id}
    }]
  })
  const [updateProposito] = useMutation(UPDATE_PROPOSITO)
  const onCreate = (data) => {
      console.log(data);
    addProposito({ variables: { ...data, id_proyecto: id}})
      onHide()
  };

  const onEdit = (data) => {
    console.log(data);
    updateProposito({variables:{
      id: editData._id,
      input: data
    }})
    onHide()
    clear()
  };

  const onChange =(valor)=>{
    console.log(valor);
    setValue("estandar", valor,{ shouldValidate: true })
  }
  if (CursosLoading){
    return(
    <Modal title="Agregar Curso" visible={show} onCancel={onHide} footer={[]}>
      <Skeleton active />
    </Modal>
    )
  }
  if (error) {
    return <h1>error</h1>
  }
   const { cursos} = data.getOneDocente
  return (
    <Modal title="Agregar Curso" visible={show} onCancel={onHide} footer={[]}>
      <FormModal>
        <form onSubmit={handleSubmit(editData? onEdit : onCreate)} >
          <label className={errors.area ? "input-icon error" : " input-icon"}>
            <span><RiInputMethodFill />{" "}|{" "}</span>
            <select  {...register("area", { required: "Seleccione un area" })}>
              <option value="seleccione" selected disabled>Seleccione un curso</option>
              {
                cursos.map((c, i) => <option key={i} value={c}>{c}</option>)
              }
            </select>
          </label>
          <span className="text-error">{errors.area?.message}</span>

          <label className={errors.competencia ? "input-icon error" : " input-icon"}>
            <span><RiInputMethodFill />{" "}|{" "}</span>
            <input type="text" placeholder="Competencia" {...register("competencia", { required: "Se requiere el competencia" })} />
          </label>
          <span className="text-error">{errors.competencia?.message}</span>

          <label className={errors.estandar ? "input-textarea error" : " input-textarea"}>
            <TextEditor setValue={editData ? editData.estandar :null} onSave={onChange} register={register("estandar",{required: "se requiere el estandar"})} placeholder="Estandar"/>
          </label>
          <span className="text-error">{errors.estandar?.message}</span>

          <label className={errors.instrumento_evaluacion ? "input-icon error" : " input-icon"}>
            <span><RiInputMethodFill />{" "}|{" "}</span>
            <input type="text" placeholder="Instrumento de Evaluacion" {...register("instrumento_evaluacion", { required: "Se requiere el instrumento_evaluacion" })} />
          </label>
          <span className="text-error">{errors.instrumento_evaluacion?.message}</span>
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

export default Addproposito