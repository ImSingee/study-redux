import * as Reducer from './reducer';
import uuid from 'uuid/v1';

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

export const getList = () => ({
    type: Reducer.GET_LIST
});