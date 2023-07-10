import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import AuthenReducer  from './slice/authSlice'
import createSagaMiddleware from 'redux-saga'
import  rootSaga  from './saga'


const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    authen:AuthenReducer,

})

const persistedReducer = persistReducer(
    {
        key: 'LocalStorageKey.ALL',
        storage,
        whitelist: ['authen'], // elements that will be persisted
        blacklist: [] // elements that will not be persisted
    },
    rootReducer
)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
            
        }).concat(sagaMiddleware),
        
})
sagaMiddleware.run(rootSaga)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const persistor = persistStore(store)
