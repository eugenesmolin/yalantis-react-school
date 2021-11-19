const employeesService = {
  getEmployees() {
    return JSON.parse(localStorage.getItem('employees')) || []
  },
  setEmployees(selectedListIds) {
    localStorage.setItem('employees', JSON.stringify(selectedListIds));
  }
}

export {
  employeesService
}