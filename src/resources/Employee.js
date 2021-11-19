import { format } from "date-fns";

export default class Employee {
  constructor({ selectedListIds, employee }) {
    this.selectedListIds = [...selectedListIds];
    this.employee = { ...employee };
  }

  getBirthday(dob) {
    const dobParse = Date.parse(dob);
    return format(dobParse, "d MMMM',' Y 'year'");
  }

  getEmployee() {
    const { id, dob, ...person } = this.employee;

    return {
      ...person,
      id,
      birthday: this.getBirthday(dob),
      isActive: this.selectedListIds.includes(id) || false
    };
  }
}