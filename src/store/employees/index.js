import { createSlice } from "@reduxjs/toolkit";
import { thunks } from "./thunks";
import { selectors } from "./selectors";
import Employ from "resources/Employ";

const initialState = {
  list: [],
  listStatus: 'idle',
};

const slice = createSlice({
  name: 'employees',
  initialState: { ...initialState },
  reducers: {

    RESET_STATE: () => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunks.getEmployees.pending, (state) => {
        state.listStatus = 'pending';
      })
      .addCase(thunks.getEmployees.fulfilled, (state, { payload }) => {
        state.list = payload.map(user => {
          const person = new Employ(user);
          return person.getEmploy();
        }).sort((a, b) => a.firstName.localeCompare(b.firstName));

        state.listStatus = 'success';
      })
      .addCase(thunks.getEmployees.rejected, (state) => {
        state.listStatus = 'fail';
      });
  },
});

const employees = {
  actions: slice.actions,
  thunks,
  selectors,
};

export { employees };
export default slice.reducer;
