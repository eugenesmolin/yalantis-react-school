import { createSlice } from "@reduxjs/toolkit";
import { thunks } from "./thunks";
import { selectors } from "./selectors";

const initialState = {
  list: [],
  listStatus: 'idle',
};

const slice = createSlice({
  name: 'users',
  initialState: { ...initialState },
  reducers: {
    RESET_STATE: () => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunks.getUsers.pending, (state) => {
        state.listStatus = 'pending';
      })
      .addCase(thunks.getUsers.fulfilled, (state, { payload }) => {
        //
        state.listStatus = 'success';
      })
      .addCase(thunks.getUsers.rejected, (state) => {
        state.listStatus = 'fail';
      });
  },
});

const users = {
  actions: slice.actions,
  thunks,
  selectors,
};

export { users };
export default slice.reducer;
