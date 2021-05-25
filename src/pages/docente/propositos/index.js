import React,{useState} from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { useParams } from 'react-router'
import { DELETE_PROPOSITO, ONE_PROYECTO } from '../../../queryApollo/query'
import HeaderPropositos from './header'
import CardCurso from './cardCurso'
import { GridPropositos } from './style'
import Addproposito from './addProposito'
import { GridSecActividades } from './cardSecActividades/style'
import CardSecActividades from './cardSecActividades'
const Propositos = () => {
  const {id} = useParams()
  const { loading, error, data } = useQuery(ONE_PROYECTO, { variables: { id}});
  const[deleteProposito] =  useMutation(DELETE_PROPOSITO,{refetchQueries:[{
    query: ONE_PROYECTO,
    variables:{id}
  }]})
  /* modal */
  const [modalShow, setModalShow] = useState(false);
  const [editData, setEditData] = useState(null);
  console.log(editData);
  if (loading) return <h2>Cargandooo..</h2>
  if (error) return <h2>error :c..</h2>
  const { nombre, enfoque, situacion, propositos, secuensia_actividades } = data.getOneProyecto;
  const onDelete = (id)=>{
    deleteProposito({ variables: { id}})
  }

  return (
    <>
      <HeaderPropositos nombre={nombre} situacion={situacion} enfoque={enfoque} onShow={() => setModalShow(true)}/>
      <GridSecActividades>
        {
          secuensia_actividades.map((sa,i)=>{
            return(<CardSecActividades key ={i} {...sa}/>)
          })
        }
      </GridSecActividades>
    <GridPropositos>
      {
          propositos.map((p, i) => <CardCurso
          key={i}
          {...p}
          onEdit={() => setModalShow(true)}
          onSetEdit={() => setEditData(p)}
            onDelete={() => onDelete(p._id)}/>)
      }
    </GridPropositos>
      <Addproposito show={modalShow} onHide={() => setModalShow(false)} editData={editData} />
    </>
  )
}

export default Propositos