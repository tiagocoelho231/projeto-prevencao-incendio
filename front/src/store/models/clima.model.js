import { createModel } from '@rematch/core';

const initialState = {
  data: []
};

export default createModel({
  state: initialState,
  reducers: {
    setData: (state, data) => ({ ...state, data })
  }
});
