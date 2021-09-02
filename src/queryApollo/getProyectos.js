import React, { useState } from 'react'
import { useMutation, useQuery} from '@apollo/client';
import { BodyCard, BoxInfo, CardOptions, CardProyectos, HeaderCard, InfoProy, ItemOption } from './style';
import { IoEyeSharp} from 'react-icons/io5'
import { RiDeleteBin6Fill} from 'react-icons/ri'
import { AiFillEdit} from 'react-icons/ai'
import { FcFolder} from 'react-icons/fc'
import { DELETE_PROYECTO, GET_PROYECTOS } from './query';
import { Popconfirm } from 'antd';
import Addproyecto from '../pages/docente/proyectos/addProyecto';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';


const Getproyectos = () => {
  const navigate = useNavigate()
  /* Modal setings */
  const [modalShow, setModalShow] = useState(false);
  /* mutation settings */
  const { loading, error, data } = useQuery(GET_PROYECTOS);
  const [editData ,setEditData] = useState(null)
  const [deleteProyecto] = useMutation(DELETE_PROYECTO,{
    refetchQueries:[{
      query: GET_PROYECTOS
    }]
  })
  const [stateId, setStateId] = useState(null)
  const confirmEdit =(data)=>{
    setModalShow(true)
  }
  const cancelEdit =(data)=>{
    setEditData(null)
  }

  function confirm(e) {
    console.log(stateId);
    deleteProyecto({ variables: { id: stateId}})
  }

  function cancel(e) {
    setStateId(null)

  }
  if(loading) return <h2>Cargandooo..</h2>
  if(error) {
    console.log("actualizando token");
    return <h2>Actualizando..</h2>
  }

  return data.getProyectos.map(({
     _id,
     nombre,
     grado,
     fecha_inicio ,
     fecha_fin,
     enfoque,
     situacion }) => {
        let f_ini = new Date(fecha_inicio * 1).toISOString().substring(0,10)
        let f_fin = new Date(fecha_fin * 1).toISOString().substring(0, 10)
       return(
      <>
      <CardProyectos key={_id}>
        <HeaderCard>
          <BoxInfo>
              <span className="icon">
                <FcFolder/>
              </span>
              <InfoProy>
                <span className="nombre">Grado: {grado}</span>
                <span className="duracion">Inicio: {f_ini}{" "} Fin: {f_fin}</span>
              </InfoProy>
          </BoxInfo>
          <CardOptions>
                 <ItemOption onClick={() => navigate(_id)}><IoEyeSharp/></ItemOption>
            <Popconfirm
              title="¿desea editar esta Unidad?"
              onConfirm={confirmEdit}
              onCancel={cancelEdit}
              okText="Si"
              cancelText="Cancelar"
            >
                   <ItemOption onClick={() => setEditData({ _id, nombre, grado, f_ini, f_fin, enfoque, situacion})}><AiFillEdit /></ItemOption>
            </Popconfirm>

            <Popconfirm
              title="¿Seguro que desea eliminar esta Unidad?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Si"
              cancelText="Cancelar"
            >
                <ItemOption onClick={()=>setStateId(_id)}><RiDeleteBin6Fill/></ItemOption>
            </Popconfirm>
          </CardOptions>
        </HeaderCard>
        <BodyCard>
            <span className="subTitle">nombre</span>
            <span className="textSubtitle">{nombre}</span>
            <span className="subTitle">enfoque</span>
            <span className="textSubtitle">{enfoque}</span>
            <span className="subTitle">situacion</span>
            <span className="textSubtitle">{situacion}</span>
        </BodyCard>
    </CardProyectos>
    <Addproyecto show={modalShow} onHide={() => { setModalShow(false) }} editData={editData} />
    </>
    )
  })
}

export default Getproyectos