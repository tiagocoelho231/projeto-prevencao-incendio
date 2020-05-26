import { createModel } from '@rematch/core';

const initialState = {
  user: {},
  error: null,
  loading: false
};

export default createModel({
  state: initialState,
  reducers: {
    authenticate: () => ({ user: {}, loading: false }),
    logout: () => ({ user: null })
  },
  effects: {}
});
