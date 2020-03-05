export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
  const response = await api.get('/users');

  dispatch({ type: FETCH_USERS, payload: response });
};
