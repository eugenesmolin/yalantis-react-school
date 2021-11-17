import http from "api/http";
import { API_ROUTES } from "api/api-routes";

export const users = {
  getUsers() {
    return http.get(API_ROUTES.users);
  }
}
