import gql from "graphql-tag";
export const CREATE_DOCENTE = gql`
mutation CreateDocente($nombres: String!, $dni: String!, $ie: String!, $grado: String!, $celular: String!) {
  createDocente(
    nombres: $nombres,
    dni: $dni,
    ie: $ie,
    grado: $grado,
    rol: 1,
    celular: $celular
  ){
    _id
    nombres
    dni
    rol
    ie
    grado
    celular
    cursos
    alumnos{
      _id
      nombres
      dni
    }
  }
}
`
export const GET_PROFILE = gql`
    query GetProfile{
      getOneDocente{
        _id
        nombres
        dni
        rol
        ie
        grado
        celular
        cursos
        alumnos{
          _id
          nombres
          dni
        }
      }
    }
`
export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($input: Inputdocente!){
    updateDocente(input: $input){
      _id
      nombres
      dni
      ie
      grado
      celular
      cursos
      alumnos{
        _id
        nombres
        dni
      }
    }
  }
`
export const ADD_ALUMNO = gql`
  mutation AddAlumno($nombres: String!, $dni: String!){
    createAlumno(nombres: $nombres, dni: $dni){
      _id
      nombres
      dni
    }
  }
`
export const DELETE_ALUMNO = gql`
  mutation DeleteAlumno($id: String!){
    deleteAlumno(_id:$id){
      _id
      nombres
      dni
    }
  }
`
export const UPDATE_ALUMNO =  gql`
  mutation UpdateAlumno($id: String!, $input: Inputalumno!){
    updateAlumno(_id: $id, input: $input){
      _id
      nombres
      dni
    }
  }
`
export const GET_PROYECTOS = gql`
  query GetProyectos {
    getProyectos{
      _id
      nombre
      grado
      fecha_inicio
      fecha_fin
      enfoque
      situacion
    }
  }
`;

export const ADD_PROYECTO = gql`
  mutation AddProyecto($nombre: String!, $grado: String!, $fecha_inicio: String! , $fecha_fin: String!, $enfoque: String!, $situacion: String!) {
    createProyecto(
      nombre:$nombre,
      grado:$grado,
      fecha_inicio: $fecha_inicio,
      fecha_fin: $fecha_fin,
      enfoque: $enfoque,
      situacion: $situacion
    ){
      _id
      nombre
      grado
      fecha_inicio
      fecha_fin
      enfoque
      situacion
    }
  }
`;

export const DELETE_PROYECTO = gql`
  mutation DeleteProyecto($id: String!){
    deleteProyecto(_id:$id){
      _id
    }
  }
`
export const UPDATE_PROYECTO = gql`
  mutation UpdateProyecto($id: String!, $input:Inputproyecto!){
    updateProyecto(
      _id: $id,
      input: $input
    ){
      _id
      nombre
      grado
      fecha_inicio
      fecha_fin
      enfoque
      situacion
    }
  }
`
export const ONE_PROYECTO = gql`
  query OneProyecto($id: String!) {
    getOneProyecto(_id: $id){
      _id
      nombre
      grado
      fecha_inicio
      fecha_fin
      enfoque
      situacion
      propositos{
        _id
        area
        competencia
        estandar
        instrumento_evaluacion
      }
      secuensia_actividades{
        _id
        titulo
        fecha
        curso{
          area
        }
      }
    }
  }
`

export const ADD_PROPOSITO =gql`
  mutation AddProposito(
    $area:String!,
    $competencia: String!,
    $estandar: String!,
    $instrumento_evaluacion: String!,
    $id_proyecto: String!
  ){
    createProposito(
      area: $area,
      competencia: $competencia,
      estandar: $estandar,
      instrumento_evaluacion: $instrumento_evaluacion,
      id_proyecto: $id_proyecto
    ){
      _id
      area
      competencia
      estandar
      instrumento_evaluacion
    }
  }
`
export const UPDATE_PROPOSITO = gql`
  mutation UpdateProposito(
    $id: String!,
    $input: Inputproposito!
  ){
    updateProposito(
      _id: $id,
      input:$input
    ){
      _id
      area
      competencia
      estandar
      instrumento_evaluacion
    }
  }
`

export const DELETE_PROPOSITO = gql`
  mutation DeleteProposito($id: String!){
    deleteProposito(_id:$id){
      _id
    }
  }
`

export const ONE_PROPOSITO = gql`
  query OneProposito($id: String!){
    getOneProposito(_id: $id){
      _id
      area
      competencia
      estandar
      instrumento_evaluacion
      capacidades{
        _id
        texto
      }
      criterios{
        _id
        texto
      }
      desenpenos{
        _id
        texto
      }
      evidencias{
        _id
        texto
      }
      metas{
        _id
        texto
      }
      sesiones{
        _id
        titulo
        fecha
        inicio
        desarrollo
        cierre
        reflexion
      }
      listacotejos{
        _id
        alumno{
          _id
          nombres
        }
        evidencia
        valoracion
        Clarificacion
        expresa_inquetudes
        sugerencias
      }
    }
  }
`

export const ADD_CAPACIDAD =  gql`
  mutation AddCapacidad($id_p: String!, $texto: String!){
    createCapacidad(
      texto: $texto,
      id_proposito: $id_p
    ){
      _id
      texto
    }
  }
`
export const ADD_CRITERIO =  gql`
  mutation AddCriterio($id_p: String!, $texto: String!){
    createCriterio(
      texto: $texto,
      id_proposito: $id_p
    ){
      _id
      texto
    }
  }
`
export const ADD_DESENPENO =  gql`
  mutation AddDesenpeno($id_p: String!, $texto: String!){
    createDesenpeno(
      texto: $texto,
      id_proposito: $id_p
    ){
      _id
      texto
    }
  }
`
export const ADD_META =  gql`
  mutation AddMeta($id_p: String!, $texto: String!){
    createMeta(
      texto: $texto,
      id_proposito: $id_p
    ){
      _id
      texto
    }
  }
`
export const ADD_EVIDENCIA =  gql`
  mutation AddEvidencia($id_p: String!, $texto: String!){
    createEvidencia(
      texto: $texto,
      id_proposito: $id_p
    ){
      _id
      texto
    }
  }
`

export const DELETE_CAPACIDAD = gql`
  mutation DeleteCapacidad($id: String!){
    deleteCapacidad(_id:$id){
      _id
    }
  }
`
export const DELETE_CRITERIO = gql`
  mutation DeleteCriterio($id: String!){
    deleteCriterio(_id:$id){
      _id
    }
  }
`
export const DELETE_DESENPENO = gql`
  mutation DeleteDesenpeno($id: String!){
    deleteDesenpeno(_id:$id){
      _id
    }
  }
`
export const DELETE_META = gql`
  mutation DeleteMeta($id: String!){
    deleteMeta(_id:$id){
      _id
    }
  }
`
export const DELETE_EVIDENCIA = gql`
  mutation DeleteEvidencia($id: String!){
    deleteEvidencia(_id:$id){
      _id
    }
  }
`
export const DELETE_SESION = gql`
  mutation DeleteSesion($id: String!){
      deleteSesion(_id:$id){
      _id
    }
  }
`

export const ADD_SESION = gql`
  mutation CREATE_SESION(
    $titulo: String!,
    $fecha: String!,
    $inicio: String!,
    $desarrollo: String!,
    $cierre: String!,
    $reflexion: String!,
    $id_proposito: String!,
  ){
    createSesion(
      titulo: $titulo,
      fecha: $fecha,
      inicio: $inicio,
      desarrollo: $desarrollo,
      cierre: $cierre,
      reflexion: $reflexion,
      id_proposito :$id_proposito
    ){
      _id
      titulo
      fecha
      inicio
      desarrollo
      cierre
      reflexion
    }
  }
`
export const UPDATE_SESION = gql`
  mutation UpdateSession($id:String!, $input:Inputsesion!){
    updateSesion(
      _id: $id,
      input: $input
    ){
      _id
      titulo
      fecha
      inicio
      desarrollo
      cierre
      reflexion
    }
  }
`
export const SEARCH_DOCENTE = gql`
  query SearchDocente($input: String!){
    searchDocentes(input: $input){
      _id
      nombres
      ie
    }
  }
`

/* search Profile */

export const GET_DOCENTE_ID = gql`
  query GetDocenteId($id: String!){
    getDocenteId(_id: $id){
      _id
      nombres
      ie
      grado
      proyectos{
        _id
        nombre
        grado
        fecha_inicio
        fecha_fin
        enfoque
        situacion
      }
    }
  }
`