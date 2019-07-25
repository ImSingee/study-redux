const defaultState = {
    list: [],
    listLoading: false
};

export const SET_ITEMS = 'setItems';
export const SET_LIST_LOADING = 'setListLoading';
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
    } else if (type === SET_LIST_LOADING) {
        const listLoading = payload;
        return {
            ...state,
            listLoading
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