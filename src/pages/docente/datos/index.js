import React,{useState} from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router'
import { ONE_PROPOSITO } from '../../../queryApollo/query'
import HeaderDatos from './header'
import MultipleCard from './multipleCard'
import { GridDatos } from './style'
import { Skeleton } from 'antd'
import Multiplecardtwo from './multipleCardTwo'
import Adddatos from './addDatos'
const Datos = ({autor=true}) => {
  const { idp } = useParams()
  const { loading, error, data } = useQuery(ONE_PROPOSITO, { variables: { id: idp } });
  const [tipo, setTipo] = useState(1)
  const [modalForm, setModalForm] = useState(false)
  if(loading){
    return(
      <Skeleton active />
    )
  }

  if (error){
    return <h1>Actualizando...</h1>
  }
  const {
    area,
    competencia,
    estandar,
    instrumento_evaluacion,
    capacidades,
    criterios,
    desenpenos,
    evidencias,
    metas,
    sesiones,
    listacotejos
   } = data.getOneProposito

   const onFormAdd = (tipo)=>{
      setTipo(tipo)
     setModalForm(true)
   }
  return (
    <>
    <HeaderDatos autor={autor} area={area} competencia={competencia} estandar={estandar} instrumento_evaluacion={instrumento_evaluacion}/>
    <GridDatos>
        <MultipleCard autor={autor} tipo={1} titulo="Capacidades" datos={capacidades} addItem={() => onFormAdd(1)}/>
        <MultipleCard autor={autor} tipo={2} titulo="Criterios" datos={criterios} addItem={() => onFormAdd(2)}/>
        <MultipleCard autor={autor} tipo={3} titulo="Desempeños" datos={desenpenos} addItem={() => onFormAdd(3)}/>
        <MultipleCard autor={autor} tipo={4} titulo="Evidencias" datos={evidencias} addItem={() => onFormAdd(4)}/>
        <MultipleCard autor={autor} tipo={5} titulo="Metas" datos={metas} addItem={() => onFormAdd(5)} />
        {
          autor && <Adddatos tipo={tipo} show={modalForm} onHide={() => setModalForm(false)} />
        }
    </GridDatos>
    <GridDatos>
        <Multiplecardtwo autor={autor} titulo="Sesiones" datos={sesiones}/>
    </GridDatos>
    </>
  )
}

export default Datos