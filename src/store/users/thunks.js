import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "api";
import requestProcessing from "services/requestsProcessing";

const getUsers = createAsyncThunk('users/getUsers', async () => {
  try {
    const res = await api.users.getUsers();

    console.log('=> users', res);

    return res.data;
  } catch (err) {
    requestProcessing(err);
    throw err;
  }
});

const thunks = {
  getUsers,
};

export { thunks };
