import React,{useEffect, useState} from 'react'
import { AutocompleteProfile, BoxInfo, BoxProfile } from './style';
import Avatar from 'antd/lib/avatar/avatar';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_DOCENTE } from '../../queryApollo/query';
import { useNavigate } from 'react-router';
import Usuario from '../../statics/img/usuario.svg'
const { Option } = AutocompleteProfile;
const ProfileSearch = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState('');
  const [searchDocente, { loading, data }] = useLazyQuery(SEARCH_DOCENTE)

  const handleSearch =(text)=>{
      setInput(text)
  }

  const handleSelect =(text)=>{
    console.log(text);
  }

  useEffect(() => {
    if(input.length >2){
      searchDocente({variables:{input}})
    }
  }, [input])
  return (
    <AutocompleteProfile

      onSearch={handleSearch}
      onSelect={handleSelect}
      placeholder="Buscar Docentes..."
    >
      {
        data && data.searchDocentes.map(({ _id, nombres, ie},i)=>(
          <Option key={i} value={nombres}>
            <BoxProfile onClick={() => navigate(`/perfil/${_id}`)}>
              <Avatar src={Usuario} />
              <BoxInfo>
                <label>{nombres}</label>
                <span>{ie}</span>
              </BoxInfo>
            </BoxProfile>
          </Option>
        ))
      }
    </AutocompleteProfile>
  )
}

export default ProfileSearch