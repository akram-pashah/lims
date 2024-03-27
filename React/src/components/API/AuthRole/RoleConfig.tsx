let appConfigAdmin = false;
let Admin = false;
let TechnicalManager = false;
let PMOOffshore = false;
let PMOOnshore = false;
let DeliveryManager = false;
let Finance = false;
let HR = false;
let ProjectAnchor = false;
let Sales = false;

export function GetSessionTokendecodeRoles() {
  const roles = sessionStorage.getItem("roleName");
  let myRole;
  if (roles) {
    myRole = roles.split(",");
  }
  if (myRole) {
    const roleCheck = (role) => myRole.includes(role);
    appConfigAdmin = roleCheck("App Config ");
    Admin = roleCheck("Admin");
    TechnicalManager = roleCheck("Technical Manager");
    PMOOffshore = roleCheck("PMO Offshore");
    PMOOnshore = roleCheck("PMO Onshore");
    DeliveryManager = roleCheck("Delivery Manager");
    Finance = roleCheck("Finance");
    HR = roleCheck("HR");
    ProjectAnchor = roleCheck("Project Anchor");
    Sales = roleCheck("Sales");
  }
  return {
    appConfigAdmin,
    Admin,
    TechnicalManager,
    PMOOffshore,
    PMOOnshore,
    DeliveryManager,
    HR,
    ProjectAnchor,
    Finance,
    Sales,
  };
}
