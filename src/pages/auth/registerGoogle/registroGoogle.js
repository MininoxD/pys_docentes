import React from 'react'
import { Avatar, Skeleton } from 'antd'
import { FormStyle } from '../../../styles/form'
import { useForm } from 'react-hook-form';
import { RiInputMethodFill } from 'react-icons/ri';
import { IoPersonRemoveSharp, IoPersonSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { CREATE_DOCENTE} from '../../../queryApollo/query';
import { setProfile } from '../../../store/user';
const RegistroGoogle = () => {
  const dispatch = useDispatch()
  const { nombre, photo } = useSelector(state => state.user)

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [createUser, { loading: loadingcreate }] = useMutation(CREATE_DOCENTE, {
    onCompleted() {
      dispatch(
        setProfile(1)
      )
    }
  })

  const onSubmit = (datosform) => {
    createUser({
      variables: { ...datosform, nombres: nombre }
    })
  };
  return (
    <FormStyle>
      <Avatar src={photo} size={90} />
      <p>Binvenido: {nombre}</p>
      <form onSubmit={handleSubmit(onSubmit)} >
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

        <label className={errors.celular ? "input-icon error" : " input-icon"}>
          <span><RiInputMethodFill />{" "}|{" "}</span>
          <input type="text" placeholder="Numero de celular"
            {...register("celular", {
              required: "Se requiere el numero de celular",
              pattern: { value: /^[0-9]+$/, message: "Solo son numeros" },
              minLength: { value: 9, message: "Son 9 digitos como minino" }
            })} />
        </label>
        <span className="text-error">{errors.celular?.message}</span>

        <label className={errors.ie ? "input-icon error" : " input-icon"}>
          <span><IoPersonRemoveSharp />{" "}|{" "}</span>
          <input type="text" placeholder="Institucion Educativa donde trabaja" {...register("ie", { required: "Se requiere la I.E" })} />
        </label>
        <span className="text-error">{errors.ie?.message}</span>

        <label className={errors.grado ? "input-icon error" : " input-icon"}>
          <span><IoPersonSharp />{" "}|{" "}</span>
          <input type="text" placeholder="Grado ejm: 2do Primaria" {...register("grado", { required: "Se requiere el grado y nivel" })} />
        </label>
        <span className="text-error">{errors.grado?.message}</span>
        {
          loadingcreate ? <div className="fake-button"><div className="spiner"></div>Creando Usuario...</div>
            : <input type="submit" value="Iniciar" />
        }
      </form>
    </FormStyle>
  )
}

export default RegistroGoogle