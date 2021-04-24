import { combineReducers } from 'redux';
import driversReducer from './driversReducer';
import racesReducer from './racesReducer';
import resultsReducer from './resultsReducer';
import standingsReducer from './standingsReducer'


export default combineReducers ({
    drivers: driversReducer,
    races: racesReducer,
    results: resultsReducer,
    standings: standingsReducer
});