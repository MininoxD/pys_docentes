import React from 'react'
import { FormStyle } from '../../../styles/form'
import { useForm } from 'react-hook-form';
import { ImKey} from  'react-icons/im'
import { IoPersonSharp} from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import { LogIn, setGoogle, setProfile } from '../../../store/user';
import { Button } from 'antd';
import { FcGoogle} from 'react-icons/fc'
import Firebase from 'firebase/app';
import 'firebase/auth'
import { GrupoSocialLogin} from './style'
const Login = () => {
  const dispatch = useDispatch()
  const { status} = useSelector(state => state.user)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
      dispatch(
        LogIn(data)
      )
  };
  const LoginGoogle = async ()=>{
    const provider = new  Firebase.auth.GoogleAuthProvider()
    const result = await Firebase.auth().signInWithPopup(provider)
    const { user: { photoURL, displayName, refreshToken}} = result
    await dispatch(
      setGoogle({ photoURL, displayName, refreshToken})
    )
  }
  return (
    <>
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
    <GrupoSocialLogin>
        <Button shape="round" icon={<FcGoogle />} size='large' onClick={LoginGoogle}>
          Ingresar con google
        </Button>
    </GrupoSocialLogin>
    </>
  )
}

export default Login