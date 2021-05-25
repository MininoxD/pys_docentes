import React,{useState} from 'react'
import { FormStyle } from '../../../styles/form'
import { useForm } from 'react-hook-form';
import { ImKey } from 'react-icons/im'
const Restore = () => {
  const [LoginLoading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  };
  console.log(errors.email);
  return (
    <FormStyle>
      <p className="auth_titulo">Recuperar Contraseña</p>
      <form onSubmit={handleSubmit(onSubmit)} >
        {LoginLoading === 'fail_login' ? <span className="text-error">Datos Incorrectos</span> : null}
        <label className={errors.email? "input-icon error" : "input-icon"}>
          <span><ImKey />{" "}|{" "}</span>
          <input type="email" placeholder="Correo electronico" {...register("email", { required: "Se requiere el correo electronico" })} />
        </label>
        <span className="text-error">{errors.email?.message}</span>
        {
          LoginLoading ? <div className="fake-button"><div className="spiner"></div>Iniciando...</div>
            : <input type="submit" value="Iniciar Sesion" />
        }
      </form>
    </FormStyle>
  )
}

export default Restore