const initialState = {
    value: 0,
};

export const exampleReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1,
            };
        case 'DECREMENT':
            return {
                ...state,
                value: state.value - 1,
            };
        default:
            return state;
    }
};
