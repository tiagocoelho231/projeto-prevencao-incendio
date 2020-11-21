import { createModel } from '@rematch/core';

const initialState = null;

export default createModel({
  state: initialState,
  reducers: {
    setClima: (_state, clima) => clima
  }
});
