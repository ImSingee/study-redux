import uuid from 'uuid/v1';

const defaultState = {
    list: []
};

export const SET_ITEMS = 'setItems';
export const ADD_ITEM = 'addItem';
export const DELETE_ITEM = 'deleteItem';

export default (state = defaultState, { type, payload }) => {
    // console.log(type, { payload });
    if (type === SET_ITEMS) {
        const { list } = payload;
        return {
            ...state,
            list
        };
    } else if (type === ADD_ITEM) {
        const list = [
            ...state.list,
            { id: payload.id, name: payload.name }
        ]
        return {
            ...state,
            list
        };
    } else if (type === DELETE_ITEM) {
        const list = state.list.filter(({ id }) => id !== payload.id);
        return {
            ...state,
            list
        }
    } else {
        return state;
    }
};