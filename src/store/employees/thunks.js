import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "api";
import requestProcessing from "services/requestsProcessing";

const getEmployees = createAsyncThunk('employees/getEmployees', async () => {
  try {
    const res = await api.employees.getEmployees();
    return res.data;
  } catch (err) {
    requestProcessing(err);
    throw err;
  }
});

const thunks = {
  getEmployees,
};

export { thunks };
