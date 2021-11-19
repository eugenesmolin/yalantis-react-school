const selectors = {
  list: state => {
    return [...state.employees.list].sort((a, b) => a.firstName.localeCompare(b.firstName))
  },
  sortedSelectedEmployees: state => {
    return [...state.employees.list].sort((a, b) => a.lastName.localeCompare(b.lastName));
  },
  listStatus: state => state.employees.listStatus,
};

export { selectors };
