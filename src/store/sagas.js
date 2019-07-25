import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { GET_LIST } from './reducer';
import { setListLoading, setItems } from './creators';

function* Sagas() {
    yield takeEvery(GET_LIST, getList);
};

function* getList() {
    yield put(setListLoading(true));
    const url = 'https://easy-mock.com/mock/5d3998a7d88a4d2dce5b9e18/study-redux/list';
    const { data } = yield axios.get(url);
    yield put(setItems(data.data.list));
    yield put(setListLoading(false));
}

export default Sagas;