export default (state=[], action) => {
    switch (action.type) {
        case 'FETCH_RACES': return action.payload;
        default: return state; 
    }
 };