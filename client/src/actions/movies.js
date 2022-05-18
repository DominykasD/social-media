import * as api from '../api';

// Action Creators
export const getMovies = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMovies();

        dispatch({ type: 'FETCH_ALL', payload: data });        
    } catch (error) {
        console.log(error.message);
    }
    
    // const action = { type: 'FETCH_ALL', payload: [] }

    // dispatch(action);
}