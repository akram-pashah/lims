// roles.js

import { decodeToken } from "react-jwt";

interface Roles {
  AppConfigAdmin: boolean;
  isAdminExists: boolean;
  isTMExists: boolean;
  isPMOOffshore: boolean;
  isPMOOnshore: boolean;
  isDmExists: boolean;
  Finance: boolean;
  isHR: boolean;
  ProjectAnchor: boolean;
  Sales: boolean;
  DecodeId;
}
const getSessionTokendecode = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
};

const roles = sessionStorage.getItem("roleName");
let myRole;
if (roles) {
  myRole = roles.split(",");
}
let AppConfigAdmin = false;
let isAdminExists = false;
let isTMExists = false;
let isPMOOffshore = false;
let isPMOOnshore = false;
let isDmExists = false;
let Finance = false;
let isHR = false;
let ProjectAnchor = false;
let Sales = false;
if (myRole) {
  const roleCheck = (role) => myRole.includes(role);

  AppConfigAdmin = roleCheck("App Config Admin");
  isAdminExists = roleCheck("Admin");
  isTMExists = roleCheck("Technical Manager");
  isPMOOffshore = roleCheck("PMO Offshore");
  isPMOOnshore = roleCheck("PMO Onshore");
  isDmExists = roleCheck("Delivery Manager");
  Finance = roleCheck("Finance");
  isHR = roleCheck("Hr");
  ProjectAnchor = roleCheck("Project Anchor");
  Sales = roleCheck("Sales");
}

let DecodeId;
export function getUserRoleAndToken() {
  const token = getSessionTokendecode();
  if (token) {
    const myDecodedToken = decodeToken(token);
    DecodeId = +myDecodedToken["Id"];
  }
  return rolesData;
}

const rolesData: Roles = {
  AppConfigAdmin,
  isAdminExists,
  isTMExists,
  isPMOOffshore,
  isPMOOnshore,
  isDmExists,
  Finance,
  isHR,
  ProjectAnchor,
  Sales,
  DecodeId,
};

export default rolesData;
