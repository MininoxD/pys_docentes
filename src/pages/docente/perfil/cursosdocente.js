import { useMutation } from '@apollo/client'
import { Popconfirm } from 'antd'
import React,{useState} from 'react'
import { GrAdd } from 'react-icons/gr'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { UPDATE_PROFILE } from '../../../queryApollo/query'
import { BodyDatos, BoxDatos, BoxHeaderDatos, CardDatos, ElementDatos, FranjaDatos, OptionDato, OptionsDatos } from '../datos/style'
import Addcurso from './addCurso'
const Cursosdocente = ({datos =[]}) => {
  const [modal, setModal] = useState(false)
  const [updateProfile] = useMutation(UPDATE_PROFILE)

  const confirm=(cur)=>{
    const cursos =  datos.filter(c => c !== cur)
    updateProfile({
      variables: {
        input: { cursos }
      }
    })
  }
  return (
    <CardDatos>
      <FranjaDatos  tipo={2}/>
      <BoxDatos>
        <BoxHeaderDatos>
          <span>Cursos</span>
          <OptionsDatos>
            <OptionDato onClick={()=>setModal(true)}><GrAdd/></OptionDato>
          </OptionsDatos>
        </BoxHeaderDatos>
        <BodyDatos>
          {
            datos.map((c,i)=>
              <ElementDatos tipo={2} key={i}>
                <div className="texto">{c}</div>
                <Popconfirm
                  title="¿Desea eliminar el curso?"
                  onConfirm={()=>confirm(c)}
                  onCancel={()=>console.log("cancelado")}
                  okText="Si"
                  cancelText="No"
                >
                <OptionDato><RiDeleteBin6Fill /></OptionDato>
                </Popconfirm>
              </ElementDatos>
            )
          }
        </BodyDatos>
      </BoxDatos>
      <Addcurso show={modal} onHide={() => setModal(false)} oldCursos={datos}/>
    </CardDatos>
  )
}

export default Cursosdocente