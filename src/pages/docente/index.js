import React from 'react'
import { Outlet } from 'react-router'
import NavHeader  from '../../components/NavBar'
const Docente = () => {
/*   const dispatch = useDispatch()
  const{data:user} = useUser()
  const refresh =()=>{
    console.log("actualiza token");
    dispatch(refreshUser())
  }

  useEffect(() => {
    if (user){
      refresh()
      const timer = setInterval(() => {
        refresh()
      }, 3.54e+6)
      return () => clearTimeout(timer);
    }
  }, [user]) */

  return (
    <>
      <NavHeader/>
      <Outlet/>
    </>
  )
}

export default Docente