import React from 'react'
import { GrAdd} from 'react-icons/gr'
import { BodyDatos, BoxDatos, BoxHeaderDatos, CardDatos, FranjaDatos, OptionDato, OptionsDatos, ElementDatos } from './style'
import { DELETE_CAPACIDAD, DELETE_CRITERIO, DELETE_DESENPENO, DELETE_EVIDENCIA, DELETE_META, ONE_PROPOSITO } from '../../../queryApollo/query'
import Elemento from './elemento'
const MultipleCard = ({tipo = 1, datos =[], titulo="Capacidades" , addItem}) => {
  const deleteTipo = {
    1: DELETE_CAPACIDAD,
    2: DELETE_CRITERIO,
    3: DELETE_DESENPENO,
    4: DELETE_EVIDENCIA,
    5: DELETE_META
  }
  const mutation = deleteTipo[tipo]

  return (
    <CardDatos>
      <FranjaDatos tipo={tipo}/>
      <BoxDatos>
        <BoxHeaderDatos>
          <span>{titulo}</span>
          <OptionsDatos>
            <label>Agregar</label>
            <OptionDato onClick={addItem}><GrAdd/></OptionDato>
          </OptionsDatos>
        </BoxHeaderDatos>
        <BodyDatos>
          {
            datos.map((ele, i) => <Elemento key={i} {...ele} mutation={mutation} tipo={tipo}/>)
          }
        </BodyDatos>
      </BoxDatos>
    </CardDatos>
  )
}

export default MultipleCard