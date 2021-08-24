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
import Searchperfil from '../pages/searchPerfil'
import Searchdatos from '../pages/searchPerfil/searchDatos'
import RegisterGoogle from "../pages/auth/registerGoogle";
import Admin from "../pages/admin";
import ListDocentes from "../pages/admin/ListDocentes";
import Especialistas from "../pages/especialista";
import Supervicion from "../pages/especialista/supervicion";
const redirect = (rol) => {
  switch (rol) {
    case 1:
      return (<Navigate to='/docente' replace={true} />)
    case 2:
      return (<Navigate to='/registersocial' replace={true} />)
    case 3:
      return (<Navigate to='/admin' replace={true} />)
    case 4:
      return (<Navigate to='/docente' replace={true} />)
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
          path: '/admin',
          element: loginRol === 3 ? <Admin/> : <Navigate to='/' replace={true} />,
          children:[
            {
              path: '/',
              element:<ListDocentes/>
            },
            {
              path: '/perfil',
              element: <Perfil />
            },
          ]
        },
        {
          path: '/registersocial',
          element: loginRol === 2 ? <Authentication /> : <Navigate to='/' replace={true} />,
          children: [
            {
              path: '/',
              element: <RegisterGoogle />
            }
          ]
        },
        {
          path: '/docente',
          element: loginRol === 1 || loginRol === 4 ? <Docente /> : <Navigate to='/' replace={true} />,
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
            },
            {
              path: '/monitoreo',
              element: loginRol === 4 ? <Especialistas /> : <Navigate to='/docente' replace={true} />
            },
            {
              path: '/monitoreo/:id_super',
              element: loginRol === 4 ? <Supervicion /> : <Navigate to='/docente' replace={true} />
            },
          ]
        },
        {
          path: '/perfil/:id_d',
          element: loginRol === 1 || loginRol === 4 || loginRol === 3 ? <Searchperfil/>: <Navigate to='/' replace={true} />,
          children: [
            {
              path: '/',
              element: <Searchdatos/>
            },
            {
              path: '/:id',
              element: <Propositos autor={false} />
            },
            {
              path: '/:id/:idp',
              element: <Datos autor={false}/>
            }
          ]
        }
      ]
    )
}


