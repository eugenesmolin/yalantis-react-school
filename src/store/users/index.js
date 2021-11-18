import { createSlice } from "@reduxjs/toolkit";
import { thunks } from "./thunks";
import { selectors } from "./selectors";
import Person from "resources/User";
import { alphabet } from "utils/constants";

const initialState = {
  list: [],
  listByAlphabet: {},
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
        state.list = payload.map(user => {
          const person = new Person(user);
          return person.getPerson();
        }).sort((a, b) => a.firstName.localeCompare(b.firstName));

        const newAlphabet = alphabet.reduce((a, v) => ({ ...a, [v]: []}), {});

        state.list.forEach(user => {
          const letter = user.firstName.charAt(0).toLowerCase();
          newAlphabet[letter].push(user);
        })

        state.listByAlphabet = newAlphabet;

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
