import { createSlice } from "@reduxjs/toolkit";
import { thunks } from "./thunks";
import { selectors } from "./selectors";
import Employee from "resources/Employee";
import { employeesService } from "services/employees";

const initialState = {
  list: [],
  listStatus: 'idle',
  selectedListIds: employeesService.getEmployees()
};

const slice = createSlice({
  name: 'employees',
  initialState: { ...initialState },
  reducers: {
    SELECT_EMPLOYEE: (state, { payload }) => {
      const employee = state.list.find(employee => employee.id === payload);
      if (employee) {
        employee.isActive = true;
        state.selectedListIds.push(payload);
        employeesService.setEmployees(state.selectedListIds)
      }
    },
    UNSELECT_EMPLOYEE: (state, { payload }) => {
      const employee = state.list.find(employee => employee.id === payload);
      if (employee) {
        employee.isActive = false;
        state.selectedListIds = state.selectedListIds.filter(id => id !== payload);
        employeesService.setEmployees(state.selectedListIds)
      }
    },
    RESET_STATE: () => initialState
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunks.getEmployees.pending, (state) => {
        state.listStatus = 'pending';
      })
      .addCase(thunks.getEmployees.fulfilled, (state, { payload }) => {
        const selectedListIds = state.selectedListIds;

        state.list = payload.map(employee => {
          const person = new Employee({ selectedListIds, employee });
          return person.getEmployee();
        });

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
