const initialState = {
  users: null,
  total: null,
  per_page: null,
  current_page: null,
};

export default {
  name: 'user',
  persistActions: ['USER_UPDATE'],
  getReducer: () => (state = initialState, { type, payload }) => {
    if (type === 'USER_UPDATE') {
      return Object.assign({}, state, { ...payload });
    }
    return state;
  },
  persist: false,
  selectUser: state => state.user || {},
  doUpdateUser: user => ({ type: 'USER_UPDATE', payload: user }),
};
