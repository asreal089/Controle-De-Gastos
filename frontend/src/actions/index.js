import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
	var res = await axios.get('/auth/current_user');
	return dispatch({ type: FETCH_USER, payload: res.data });
};
