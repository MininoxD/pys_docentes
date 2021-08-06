import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'

import Firebase from 'firebase/app';
import 'firebase/auth'
const uri = process.env.REACT_APP_GRAPHQL
export const LogIn = createAsyncThunk('user/login', async (datos)=>{
  const auth = await Firebase.auth().signInWithEmailAndPassword("" + datos.email, "" + datos.password)
  const { user: { refreshToken, photoURL}} =  await auth
  const datosgraphql = await fetch(
    uri,
     {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
         'Authorization': `${refreshToken}`
       },
       body: JSON.stringify({ query: "{ getOneDocente{ nombres rol}}" })
     }
  )
  const {data:{getOneDocente:{rol, nombres}}} = await datosgraphql.json()
  return { rol, nombres, refreshToken, photoURL}
})

export const RegisterUser =  createAsyncThunk('user/register', async(data)=>{
  try {
    const user = await Firebase.auth().createUserWithEmailAndPassword('' + data.email, '' + data.password)
    console.log(user);
    const { refreshToken, photoURL } = user.user
    console.log(refreshToken);
    const datosgraphql = await fetch(
      uri,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `${refreshToken}`
        },
        body: JSON.stringify({
          query: `mutation{
          createDocente(
            nombres: "${data.nombres}",
            dni:"${data.dni}",
            ie:"${data.ie}",
            grado:"${data.grado}",
            rol:1,
            celular:"${data.celular}"
          ){
            _id
            nombres
            rol
          }
        }`})
      }
    )
    const { data: { createDocente: { rol, nombres } } } = await datosgraphql.json()
    return { rol, nombres, refreshToken, photoURL }
  } catch (error) {
    throw error
  }

})

export const LogOut = createAsyncThunk('user/logout', async()=>{
  await Firebase.auth().signOut()
  return null;
})

let userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogin: false,
    nombre: '',
    photo: '',
    rolLogin: null,
    darkmode: false,
    token:'',
    status: ''
  },
  reducers:{
    setProfile: (state, action) => {
      state.rolLogin = action.payload
    },
    setGoogle: (state, action) =>{
      state.isLogin  = true;
      state.rolLogin = 2;
      state.nombre = action.payload.displayName
      state.photo = action.payload.photoURL
      state.token = action.payload.refreshToken
    }
  },
  extraReducers :{
    [LogIn.pending]: (state, action) => {
      state.status = 'loading_login'
    },
    [LogIn.fulfilled]: (state, action) => {
      state.isLogin = true
      state.rolLogin = action.payload.rol
      state.nombre =  action.payload.nombres
      state.token = action.payload.refreshToken
      state.photo = action.payload.photoURL
      state.status = 'success_login'
    },
    [LogIn.rejected]: (state, action) => {
      state.status = 'fail_login'
    },
    [LogOut.pending]: (state, action) => {
      state.status = 'loading_logout'
    },
    [LogOut.fulfilled]: (state, action) => {
      state.isLogin = false
      state.rolLogin =null
      state.nombre = null
      state.token = ''
      state.photo = null
      state.status = 'success_logout'
    },
    [LogOut.rejected]: (state, action) => {
      state.status = 'fail_logout'
    },
    [RegisterUser.pending]: (state, action) => {
      state.status = 'loading_RegisterUser'
    },
    [RegisterUser.fulfilled]: (state, action) => {
      state.isLogin = true
      state.rolLogin = action.payload.rol
      state.nombre = action.payload.nombres
      state.token = action.payload.refreshToken
      state.photo = action.payload.photoURL
      state.status = 'success_RegisterUser'
    },
    [RegisterUser.rejected]: (state, action) => {
      state.status = 'fail_RegisterUser'
    }
  }
})

export const { setProfile, setGoogle} = userSlice.actions
export default userSlice.reducer;