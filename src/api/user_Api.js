import { apiBase } from "./api_base";

export const apiUer = {
    signup: `${apiBase}/user/signup`,
    login: `${apiBase}/user/login`,
    logout: `${apiBase}/user/logout`,
    refreshToken: `${apiBase}/user/handlerRefreshToken`
  }


