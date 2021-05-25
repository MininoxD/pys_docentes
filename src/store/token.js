import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'

import Firebase from 'firebase/app';
import 'firebase/auth'

export const refreshUser = createAsyncThunk('user/refresh', async () => {
  const token = await Firebase.auth().currentUser.getIdToken(true)
  return token;
})


let tokenSlice = createSlice({
  name: 'token',
  initialState: {
    value: '',
    status: ''
  },
  extraReducers:{
    [refreshUser.pending]: (state, action) => {
      state.status = 'loading_refreshUser'
    },
    [refreshUser.fulfilled]: (state, action) => {
      state.value = action.payload
      state.status = 'success_refreshUser'
    },
    [refreshUser.rejected]: (state, action) => {
      state.status = 'fail_refreshUser'
    }
  }
})

export default tokenSlice.reducer;