import React from 'react'
import { FormStyle } from '../../../styles/form'
import { useForm } from 'react-hook-form';
import { ImKey} from  'react-icons/im'
import { IoPersonSharp} from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import { LogIn } from '../../../store/user';
const Login = () => {
  const dispatch = useDispatch()
  const { status} = useSelector(state => state.user)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
      dispatch(
        LogIn(data)
      )
  };
  return (
    <FormStyle>
      <p className="auth_titulo">Iniciar Sesion</p>
      <form onSubmit={handleSubmit(onSubmit)} >
        {status === 'fail_login' ? <span className="text-error">Datos Incorrectos</span> : null}
        <label className={errors.email ? "input-icon error" : " input-icon"}>
          <span><IoPersonSharp />{" "}|{" "}</span>
          <input type="email" placeholder="Correo electronico" {...register("email", { required: "Se requiere el correo electronico" })} />
        </label>
        <span className="text-error">{errors.email?.message}</span>
        <label className={errors.password ? "input-icon error" : " input-icon"}>
          <span><ImKey />{" "}|{" "}</span>
          <input type="password" placeholder="password" {...register("password", { required: "Se requiere la contraseña" })} />
        </label>
        <span className="text-error">{errors.password?.message}</span>
        {
          status === 'loading_login' ? <div className="fake-button"><div className="spiner"></div>Iniciando...</div>
            : <input type="submit" value="Iniciar Sesion" />
        }
      </form>
    </FormStyle>
  )
}

export default Login