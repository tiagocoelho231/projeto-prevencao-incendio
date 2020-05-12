import { init } from '@rematch/core'

import models from './models';

const store = init({
  models,
  redux: {
    reducers: models
  }
})

export default store;