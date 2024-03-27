import { useState } from "react";
import { api } from "./API/apiConfig";
// import { useNavigate } from "react-router-dom";

export function CallGetVersionAPI() {
  return api.get(`api/GetAppVersion`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function UserLogin(data: any) {
  return api.post(`api/auth/login`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default function AuthUser() {
  //   const navigate = useNavigate();

  const getToken = () => {
    const tokenString: string = sessionStorage.getItem("token") ?? "{}";
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (token: any) => {
    sessionStorage.setItem("token", JSON.stringify(token));

    setToken(token);
    // navigate('/dashboard', {replace: true});
  };

  const logout = () => {
    sessionStorage.clear();
    // navigate('/login', {replace: true});
  };

  return {
    setToken: saveToken,
    token,
    getToken,
    logout,
  };
}
