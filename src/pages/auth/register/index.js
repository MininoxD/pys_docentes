import React,{useState, useRef} from 'react'
import { useForm } from 'react-hook-form';
import { ImKey } from 'react-icons/im'
import { IoPersonSharp } from 'react-icons/io5'
import { RiInputMethodFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterUser } from '../../../store/user';
import { FormStyle } from '../../../styles/form'
import { ContainerRegister } from './style';
const Register = () => {
  const {status} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const { watch, register, handleSubmit, formState: { errors } } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = data => {
    dispatch(
      RegisterUser(data)
    )
  };

  return (

      <FormStyle>
        <p className="auth_titulo">Registrarse</p>
        <form onSubmit={handleSubmit(onSubmit)} >
        <ContainerRegister>
          <div>
            {status === 'fail_RegisterUser' ? <span className="text-error">El correo i/o el dni ya estan registrados</span> : null}
              <label className={errors.nombres ? "input-icon error" : " input-icon"}>
                <span><IoPersonSharp />{" "}|{" "}</span>
                <input type="text" placeholder="Nombres y Apellidos" {...register("nombres", { required: "Se requiere los nombres" })} />
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
                <span><IoPersonSharp />{" "}|{" "}</span>
                <input type="text" placeholder="Institucion Educativa donde trabaja" {...register("ie", { required: "Se requiere la I.E" })} />
              </label>
              <span className="text-error">{errors.ie?.message}</span>
          </div>
          <div>
            <label className={errors.grado ? "input-icon error" : " input-icon"}>
              <span><IoPersonSharp />{" "}|{" "}</span>
              <input type="text" placeholder="Grado ejm: 2do Primaria" {...register("grado", { required: "Se requiere el grado y nivel" })} />
            </label>
            <span className="text-error">{errors.grado?.message}</span>

            <label className={errors.email ? "input-icon error" : " input-icon"}>
              <span><IoPersonSharp />{" "}|{" "}</span>
              <input type="email" placeholder="Correo electronico" {...register("email", { required: "Se requiere el correo electronico" })} />
            </label>
            <span className="text-error">{errors.email?.message}</span>

              <label className={errors.password ? "input-icon error" : " input-icon"}>
                <span><ImKey />{" "}|{" "}</span>
                <input type="password" placeholder="Contraseña" {...register("password", { required: "Se requiere la contraseña" })} />
              </label>
              <span className="text-error">{errors.password?.message}</span>
              <label className={errors.password_confirmation ? "input-icon error" : " input-icon"}>
                <span><ImKey />{" "}|{" "}</span>
                <input type="password" placeholder="confirmar contraseña" {...register("password_confirmation", {
                  validate: value =>
                    value === password.current || "La contraseña no coincide"
                })} />
              </label>
              <span className="text-error">{errors.password_confirmation?.message}</span>
          </div>
        </ContainerRegister>
          {
          status === 'loading_RegisterUser' ? <div className="fake-button"><div className="spiner"></div>Registrando...</div>
              : <input type="submit" value="Registrarse" />
          }

        </form>
      </FormStyle>


  )
}

export default Register