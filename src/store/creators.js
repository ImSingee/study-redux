import * as Reducer from './reducer';
import uuid from 'uuid/v1';
import axios from 'axios';

export const setItems = (list) => ({
    type: Reducer.SET_ITEMS,
    payload: {
        list
    }
})

export const setListLoading = (status) => ({
    type: Reducer.SET_LIST_LOADING,
    payload: status
});

export const addItem = (name, id) => ({
    type: Reducer.ADD_ITEM,
    payload: {
        id: id ? id : uuid(),
        name
    }
});

export const deleteItem = (id) => ({
    type: Reducer.DELETE_ITEM,
    payload: { id }
});

export const getList = () => (dispatch => {
    dispatch(setListLoading(true));
    const url = 'https://easy-mock.com/mock/5d3998a7d88a4d2dce5b9e18/study-redux/list';
    axios.get(url).then(({ data }) => {
        // console.log(data);
        // console.log(data.data.list);
        dispatch(setItems(data.data.list));
        dispatch(setListLoading(false));
    });
});