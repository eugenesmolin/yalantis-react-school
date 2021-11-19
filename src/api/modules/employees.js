import http from "api/http";
import { API_ROUTES } from "api/api-routes";

export const employees = {
  getEmployees() {
    return http.get(API_ROUTES.employees);
  }
}
