import {
  configureStore,
  combineReducers
} from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer
} from 'redux-persist'
import userSlice from './user.js'
import tokenSlice from './token.js'
import storage from 'redux-persist/lib/storage'

const reducer = combineReducers({
  user: userSlice,
  token: tokenSlice,
})

const persistConfg = {
  key: 'root',
  storage: storage,
  whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfg, reducer)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)