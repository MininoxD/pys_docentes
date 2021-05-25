import { Navigate } from "react-router";
import  Authentication from '../pages/auth'
import Login from '../pages/auth/login'
import Register  from '../pages/auth/register'
import  Restore  from '../pages/auth/restore'
import Docente from "../pages/docente";
import Proyectos from "../pages/docente/proyectos";
import Propositos from '../pages/docente/propositos'
import Datos from "../pages/docente/datos";
import Perfil from "../pages/docente/perfil";
const redirect = (rol) => {
  switch (rol) {
    case 1:
      return (<Navigate to='/docente' replace={true} />)
    case 2:
      return (<Navigate to='/supervisor' replace={true} />)
    case 3:
      return (<Navigate to='/admin' replace={true} />)
    default:
      return (<Navigate to='/' replace={true} />)
  }
}

export const routes = (loginRol) =>{
    return(
      [
        {
          path: '/',
          element: loginRol ? redirect(loginRol) : <Authentication />,
          children: [
            {
              path: '/',
              element: <Login />
            },
            {
              path: '/register',
              element: <Register />
            },
            {
              path: '/restore',
              element: <Restore />
            }
          ]
        },
        {
          path: '/docente',
          element: loginRol === 1 ? <Docente /> : <Navigate to='/' replace={true} />,
          children: [
            {
              path: '/',
              element: <Proyectos />
            },
            {
              path: '/perfil',
              element: <Perfil />
            },
            {
              path: '/:id',
              element: <Propositos/>
            },
            {
              path: '/:id/:idp',
              element: <Datos/>
            }
          ]
        }
      ]
    )
}


