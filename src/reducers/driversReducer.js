export default (state=[], action) => {
    switch (action.type) {
        case 'FETCH_DRIVERS': return action.payload;
        default: return state; 
    }
 };