import React from 'react'

import RegistroGoogle from './registroGoogle';
import { Skeleton } from 'antd';
import { useQuery } from '@apollo/client';
import { GET_PROFILE } from '../../../queryApollo/query';
import { setProfile } from '../../../store/user';
import { useDispatch } from 'react-redux';
const RegisterGoogle = () => {
  const dispatch = useDispatch()
  const { loading, data, error } = useQuery(GET_PROFILE, { fetchPolicy:'no-cache'})
  if (loading){
    return(<Skeleton active />)
  }
  if (data?.getOneDocente) {
    dispatch(
      setProfile(data.getOneDocente.rol)
    )
    return (<Skeleton active />)
  }

  return(
    <>
       <RegistroGoogle />
    </>
  )
}

export default RegisterGoogle