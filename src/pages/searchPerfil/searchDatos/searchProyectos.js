import React from 'react'
import { FcFolder } from 'react-icons/fc'
import { IoEyeSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { BodyCard, BoxInfo, CardOptions, CardProyectos, HeaderCard, InfoProy, ItemOption } from '../../../queryApollo/style'
import { HiDocumentSearch} from 'react-icons/hi'
import { GoChecklist} from 'react-icons/go'
import { Popconfirm, Tooltip } from 'antd'
import { useMutation } from '@apollo/client'
import { CREATE_SUPERVICION } from '../../../queryApollo/query'
const Searchproyectos = ({ _id, grado, fecha_inicio, fecha_fin, nombre, enfoque, situacion, supervicion, id_docente}) => {
  let f_ini = new Date(fecha_inicio * 1).toISOString().substring(0, 10)
  let f_fin = new Date(fecha_fin * 1).toISOString().substring(0, 10)
  const [createSupervicion] = useMutation(CREATE_SUPERVICION,{
    onCompleted:(data)=>{
      navigate(`/docente/monitoreo/${data.createSupervision._id}`)
    }
  })
  const navigate = useNavigate()

  const { rolLogin } = useSelector(state => state.user)

  const superVisar =()=>{
    createSupervicion({
      variables: {
        id_docente,
        id_proyecto:_id
      }
    })
  }
  const cancel =()=>{

  }
  return (
    <CardProyectos key={_id}>
      <HeaderCard>
        <BoxInfo>
          <span className="icon">
            <FcFolder />
          </span>
          <InfoProy>
            <span className="nombre">{grado}</span>
            <span className="duracion">Inicio: {f_ini}{" "} Fin: {f_fin}</span>
          </InfoProy>
        </BoxInfo>
        <CardOptions>
          <ItemOption onClick={() => navigate(_id)}><IoEyeSharp /></ItemOption>
          {
            supervicion !== null?
              rolLogin === 4 &&
            <Tooltip title="Esta supervisado">
                <ItemOption onClick={() => navigate(`/docente/monitoreo/${supervicion._id}`)}><HiDocumentSearch /></ItemOption>
            </Tooltip>
            :
              rolLogin === 4 &&
            <Popconfirm
              title="¿Desea supervisar este Proyecto de Aprendizaje?"
              onConfirm={superVisar}
              onCancel={cancel}
              okText="Si"
              cancelText="Cancelar"
            >
            <Tooltip title="Supervisar">
                <ItemOption><GoChecklist /></ItemOption>
            </Tooltip>
            </Popconfirm>
          }
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
  )
}

export default Searchproyectos