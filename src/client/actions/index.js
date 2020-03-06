export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
  const response = await api.get('/users');

  dispatch({ type: FETCH_USERS, payload: response });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const response = await api.get('/current_user');

  console.log('fetch Current User', response.data);

  dispatch({ type: FETCH_CURRENT_USER, payload: response });
};
