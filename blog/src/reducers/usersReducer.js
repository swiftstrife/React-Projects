export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            {
                const id = action.payload.id;

                if (!state[id])
                    return { ...state, [id] : action.payload };
            }
            
        default:
            return state;           
    };

}