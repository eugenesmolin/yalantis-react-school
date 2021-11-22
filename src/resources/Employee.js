import { format, isValid } from "date-fns";

export default class Employee {
  constructor({ selectedListIds, employee }) {
    this.selectedListIds = [...selectedListIds];
    this.employee = { ...employee };
  }

  getBirthday(dob) {
    const dobParse = Date.parse(dob);
    if (!isValid(dobParse)) return 'Incorrect date'
    return format(dobParse, "d MMMM',' Y 'year'");
  }

  getEmployee() {
    const { id, dob, ...person } = this.employee;

    return {
      ...person,
      id,
      dob,
      birthday: this.getBirthday(dob),
      isActive: this.selectedListIds.includes(id) || false
    };
  }
}