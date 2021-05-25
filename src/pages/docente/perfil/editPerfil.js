import React from 'react'
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { RiInputMethodFill } from 'react-icons/ri';
import { UPDATE_PROFILE } from '../../../queryApollo/query';
import { FormModal } from '../../../styles/form'
import Modal from 'antd/lib/modal/Modal'
const Editperfil = ({ show,onHide, editData= null}) => {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [updateProfile, {loading}] = useMutation(UPDATE_PROFILE,{onCompleted(){onHide()}})
  if (editData) {
    setValue("nombres", editData.nombres)
    setValue("dni", editData.dni)
    setValue("ie", editData.ie)
    setValue("grado", editData.grado)
    setValue("celular", editData.celular)
  }

  const onEdit =(input)=>{
    updateProfile({
      variables:{input}
    })
  }
  return (
    <Modal
      title="Editar Perfil" visible={show} onCancel={onHide} footer={[]}
    >
      <FormModal>
        <form onSubmit={handleSubmit(onEdit)} >
          <label className={errors.nombres ? "input-icon error" : " input-icon"}>
            <span><RiInputMethodFill />{" "}|{" "}</span>
            <input type="text" placeholder="Nombre completo del alumno" {...register("nombres", { required: "Se requiere el nombre" })} />
          </label>
          <span className="text-error">{errors.nombres?.message}</span>

          <label className={errors.dni ? "input-icon error" : " input-icon"}>
            <span><RiInputMethodFill />{" "}|{" "}</span>
            <input type="text" placeholder="Numero de DNI"
              {...register("dni", {
                required: "Se requiere el numero de DNI",
                pattern: { value: /^[0-9]+$/, message: "Solo se requiere numeros" },
                maxLength: { value: 8, message: "Meximo son 8 digitos" },
                minLength: { value: 8, message: "Son 8 digitos" }
              })} />
          </label>
          <span className="text-error">{errors.dni?.message}</span>

          <label className={errors.ie ? "input-icon error" : " input-icon"}>
            <span><RiInputMethodFill />{" "}|{" "}</span>
            <input type="text" placeholder="Nombre de la I.E actual" {...register("ie", { required: "Se requiere el nombre de la I.E" })} />
          </label>
          <span className="text-error">{errors.ie?.message}</span>

          <label className={errors.grado ? "input-icon error" : " input-icon"}>
            <span><RiInputMethodFill />{" "}|{" "}</span>
            <input type="text" placeholder="Grado que enseña actualmente" {...register("grado", { required: "Se requiere el grado que enseña" })} />
          </label>
          <span className="text-error">{errors.grado?.message}</span>

          <label className={errors.celular ? "input-icon error" : " input-icon"}>
            <span><RiInputMethodFill />{" "}|{" "}</span>
            <input type="text" placeholder="Nombre de celular de contacto" {...register("celular", { required: "Se requiere el numero de celular" })} />
          </label>
          <span className="text-error">{errors.celular?.message}</span>

            {
            loading ? <div className="fake-button"><div className="spiner"></div>Actualizando...</div>
              : <input type="submit" value="Actualizar" />
            }

        </form>
      </FormModal>
    </Modal>
  )
}

export default Editperfil