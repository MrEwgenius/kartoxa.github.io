import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import formReducer from './reducers/formSlice'

import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        formReducer,
    },
    middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga)

export type Rootstate = ReturnType<typeof store.getState>

export default store;