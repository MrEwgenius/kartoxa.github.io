import { all } from 'redux-saga/effects'

import postSagaWatcher from './saga'





export default function* rootSaga() {

    yield all([postSagaWatcher()])


}