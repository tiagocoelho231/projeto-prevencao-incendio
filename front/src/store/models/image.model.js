import { createModel } from '@rematch/core';
import { API } from '../../config';

const initialState = {
  data: [],
  error: null,
  loading: false
};

export default createModel({
  state: initialState,
  reducers: {
    fetchStart: () => ({ data: [], error: null, loading: true }),
    fetchSuccess: (state, data) => ({ ...state, data, loading: false }),
    fetchFail: (state, error) => ({ ...state, error, loading: false })
  },
  effects: dispatch => ({
    async fetch() {
      try {
        const { data } = await API.get('/images');
        dispatch.image.fetchSuccess(data);
      } catch (error) {
        dispatch.image.fetchFail(error);
      }
    }
  })
});
