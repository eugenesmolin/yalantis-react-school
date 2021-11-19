import { configureStore } from '@reduxjs/toolkit';
import employees from './employees';

export default configureStore({
  reducer: {
    employees
  }
});
