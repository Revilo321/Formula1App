import ergast from '../apis/ergast';

export const fetchDrivers = () => async dispatch => {
    const response = await ergast.get('/api/f1/2020/drivers.json');
    dispatch({type: 'FETCH_DRIVERS', payload: response.data.MRData.DriverTable.Drivers})
};


export const fetchRaces = () => async dispatch => {
    const response = await ergast.get('/api/f1/2020/races.json');
    dispatch({type: 'FETCH_RACES', payload: response.data.MRData.RaceTable.Races})
};


export const fetchResult = (year, round) => async dispatch => {
    const response = await ergast.get(`/api/f1/${year}/${round}/results.json`);
    dispatch({type: 'FETCH_RESULTS', payload: response.data.MRData.RaceTable.Races})
    
};

export const fetchStandings = (year) => async dispatch => {
    const response = await ergast.get(`/api/f1/${year}/driverStandings.json`);
    dispatch({type: 'FETCH_STANDINGS', payload: response.data.MRData.StandingsTable.StandingsLists})
    
};