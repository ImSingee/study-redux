import uuid from 'uuid/v1';

const defaultState = {
    list: [
        { id: uuid(), name: 'List 1' },
        { id: uuid(), name: 'List 2' },
        { id: uuid(), name: 'List 3' },
    ]
};

export const ADD_ITEM = 'addItem';
export const DELETE_ITEM = 'deleteItem';

export default (state = defaultState, { type, payload }) => {
    console.log(type, { payload });

    if (type === 'addItem') {
        const list = [
            ...state.list,
            { id: payload.id, name: payload.name }
        ]
        return {
            ...state,
            list
        };
    } else if (type === 'deleteItem') {
        const list = state.list.filter(({ id }) => id !== payload.id);
        return {
            ...state,
            list
        }
    } else {
        return state;
    }
};