import { format } from "date-fns";

export default class Employ {
  constructor(person) {
    this.person = { ...person };
  }

  getBirthday(dob) {
    const dobParse = Date.parse(dob);
    return format(dobParse, "d MMMM',' Y 'year'");
  }

  getEmploy() {
    const { dob, ...person } = this.person;

    return {
      ...person,
      birthday: this.getBirthday(dob),
      isActive: false
    };
  }
}