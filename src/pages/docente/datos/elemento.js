import { useMutation } from '@apollo/client'
import { Popconfirm } from 'antd'
import React, { useState } from 'react'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { useParams } from 'react-router'
import { ONE_PROPOSITO } from '../../../queryApollo/query'
import { ElementDatos, OptionDato } from './style'
const Elemento = ({ tipo, texto, _id, mutation}) => {
  const { idp } = useParams()
  const [showPop, setPopShow] = useState(false)
  const [deletDatos, { loading }] = useMutation(mutation, {
    onCompleted() {
      setPopShow(false)
    },
    refetchQueries: [{
      query: ONE_PROPOSITO,
      variables: {
        id: idp
      }
    }]
  })
  return (
    <ElementDatos tipo={tipo}>
      <div className="texto"><span dangerouslySetInnerHTML={{ __html: texto }} /></div>
      <Popconfirm
        title={`¿Desea eliminar el elemento?`}
        visible={showPop}
        onConfirm={() => deletDatos({ variables: { id: _id } })}
        okButtonProps={{ loading }}
        onCancel={() => setPopShow(false)}
      >
        <OptionDato onClick={() => setPopShow(true)}><RiDeleteBin6Fill /></OptionDato>
      </Popconfirm>
    </ElementDatos>
  )
}

export default Elemento