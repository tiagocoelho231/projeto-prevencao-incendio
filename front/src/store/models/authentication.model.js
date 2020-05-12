import { createModel } from '@rematch/core';

const initialState = {
  user: null,
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
