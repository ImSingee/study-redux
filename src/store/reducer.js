const defaultState = {
    list: [
        'List 1',
        'List 2',
        'List 3',
    ]
};

export default (state = defaultState, { type, payload }) => {
    console.log(type);
    console.log(payload);
    switch (type) {
        case 'addItem':
            const { list } = state;
            const newItem = payload.value;
            list.push(newItem);
            return Object.assign(state, {
                list
            });
        default:
            return state;
    }
};