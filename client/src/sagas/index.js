import { takeLatest, call, put } from 'redux-saga/effects'
import host from '../services/host'

function fetchApi() {
    return fetch(`${host}/musics`)
        .then(res => res.json())
} 

function* getMusicsSaga() {
    try {
        const musics = yield call(fetchApi);
        yield put({type: 'MUSICS_RECEIVED', musics});
        yield put({type: 'MAP_MUSICS'});
    }
    catch(error) {
        yield put({type: 'MUSICS_RECEIVED', error})
    }
}

export default function* saga() {
    yield takeLatest('GET_MUSICS', getMusicsSaga)
}