import { decodeToken } from "react-jwt";

export function getSessionToken() {
  const tokenString: string = sessionStorage.getItem("token") ?? "{}";
  const userToken = JSON.parse(tokenString);
  return userToken;
}

export function loginUserId() {
  const myDecodedToken: any = decodeToken(getSessionToken());
  return {
    Id: +myDecodedToken["Id"],
    EmployeeID: myDecodedToken["EmployeeID"],
    Displayname: myDecodedToken["Displayname"],
    Email: myDecodedToken["Email"],
    Roles: myDecodedToken["Roles"],
    exp: myDecodedToken["exp"],
  };
}
