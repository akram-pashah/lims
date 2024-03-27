import { RouteType } from "../../router/config";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import CropLandscapeOutlinedIcon from "@mui/icons-material/CropLandscapeOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import ControlCameraOutlinedIcon from "@mui/icons-material/ControlCameraOutlined";
import WysiwygOutlinedIcon from "@mui/icons-material/WysiwygOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import ManageHistoryOutlinedIcon from "@mui/icons-material/ManageHistoryOutlined";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import MailIcon from "@mui/icons-material/Mail";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import PunchClockOutlinedIcon from "@mui/icons-material/PunchClockOutlined";
import rolesData from "./rolesData";

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

const appRoutes: RouteType[] = [
  {
    state: "OrderManagementSystem",
    access: true,
    sidebarProps: {
      displayText: "OMS",
      icon: <WysiwygOutlinedIcon />,
    },
    child: [
      {
        path: "/loe",
        access: true,
        state: "OrderManagementSystem.loe",
        sidebarProps: {
          displayText: "LOE",
        },
      },
      {
        path: "/masterproject",
        state: "OrderManagementSystem.masterproject",
        access: true,
        sidebarProps: {
          displayText: "Master Project",
        },
      },
      {
        state: "Configurations",
        access: true,
        sidebarProps: {
          displayText: "Configurations",
          icon: <ThumbUpOffAltOutlinedIcon />,
        },
        child: [
          {
            path: "/country",
            state: "Configurations.Country",
            access: true,
            sidebarProps: {
              displayText: "Country",
            },
          },
          {
            path: "/location",
            access: true,
            state: "Configurations.Location",
            sidebarProps: {
              displayText: "Location",
            },
          },
          {
            path: "/billingCycleStatus",
            access: true,
            state: "Configurations.BillingCycleStatus",
            sidebarProps: {
              displayText: "Billing Cycle Status",
            },
          },
          {
            path: "/cOStatus",
            access: true,
            state: "Configurations.COStatus",
            sidebarProps: {
              displayText: "CO Status",
            },
          },
          {
            path: "/financialYear",
            access: true,
            state: "Configurations. FinancialYear",
            sidebarProps: {
              displayText: "Financial Year",
            },
          },
          {
            path: "/milestoneStatus",
            access: true,
            state: "Configurations.MilestoneStatus",
            sidebarProps: {
              displayText: "Milestone Status",
            },
          },
          {
            path: "/projectStatus",
            state: "Configurations.ProjectStatus",
            access: true,
            sidebarProps: {
              displayText: "Project Status",
            },
          },
          {
            path: "/projectType",
            state: "Configurations.ProjectType",
            access: true,
            sidebarProps: {
              displayText: "Project Type",
            },
          },
          {
            path: "/mcc",
            state: "Configurations.MCC",
            access: true,
            sidebarProps: {
              displayText: "MCC",
            },
          },
          {
            path: "/natureofWork",
            state: "Configurations.NatureofWork",
            access: true,
            sidebarProps: {
              displayText: "Nature of Work",
            },
          },
          {
            path: "/roleinProject",
            state: "Configurations.RoleInProject",
            access: true,
            sidebarProps: {
              displayText: "Role In Project",
            },
          },
          {
            path: "/currency",
            state: "Configurations.Currency",
            access: true,
            sidebarProps: {
              displayText: "Currency",
            },
          },
          {
            path: "/documentStatus",
            state: "Configurations.DocumentStatus",
            access: true,
            sidebarProps: {
              displayText: "Document Status",
            },
          },
          {
            path: "/department",
            state: "Configurations.Department",
            access: true,
            sidebarProps: {
              displayText: "Department",
            },
          },
          {
            path: "/CurrencyConversions",
            state: "Configurations.CurrencyConversions",
            access: true,
            sidebarProps: {
              displayText: "Currency Conversions",
            },
          },
          {
            path: "/mastertimesheetactivitytype",
            state: "Configurations.TimesheetActivityType",
            access: true,
            sidebarProps: {
              displayText: "Timesheet Activity Type",
            },
          },
          {
            path: "/mastertimesheetactivity",
            state: "Configurations.TimesheetActivity",
            access: true,
            sidebarProps: {
              displayText: "Timesheet Activity",
            },
          },
          {
            path: "/timesheetprojectstatus",
            state: "Configurations.TimesheetProjectStatus",
            access: true,
            sidebarProps: {
              displayText: "Timesheet Project Status",
            },
          },
        ],
      },
      {
        state: "allocation",
        sidebarProps: {
          displayText: "Allocation",
          icon: <BallotOutlinedIcon />,
        },
        child: [
          {
            path: "/allocation",
            state: "allocation.allocation",
            access: true,
            sidebarProps: {
              displayText: "Allocation",
            },
          },
        ],
      },
    ],
  },

  {
    path: "/bireport",
    state: "biReport",
    access: true,
    sidebarProps: {
      displayText: "BI Report",
      icon: <AssessmentOutlinedIcon />,
    },
  },
  {
    path: "/businessforecast",
    state: "BusinessForecast",
    access: true,
    sidebarProps: {
      displayText: "Business Forecast",
      icon: <BusinessOutlinedIcon />,
    },
  },
  {
    path: "/timesheet",
    state: "Timesheet",
    access: true,
    sidebarProps: {
      displayText: "Timesheet",
      icon: <PunchClockOutlinedIcon />,
    },
  },
  // {
  //   path: "/confirmations",
  //   state: "Confirmations",
  //   access: false,
  //   sidebarProps: {
  //     displayText: "Confirmations",
  //     icon: <ConfirmationNumberOutlinedIcon />,
  //   },
  // },
  {
    state: "Confirmations",
    access: true,
    sidebarProps: {
      displayText: "Confirmations",
      icon: <ThumbUpOffAltOutlinedIcon />,
    },
    child: [
      {
        path: "/confirmation-pmo",
        access: true,
        state: "Confirmations.PMO",
        sidebarProps: {
          displayText: "PMO",
        },
      },
      {
        path: "/confirmation-dm",
        access: rolesData.isAdminExists ? true : rolesData.isDmExists,
        state: "Confirmations.DM",
        sidebarProps: {
          displayText: "DM",
        },
      },
      {
        path: "/confirmation-fa",
        access: true,
        state: "Confirmations.FA",
        sidebarProps: {
          displayText: "FA",
        },
      },
    ],
  },
  // {
  //   path: "/confirmation",
  //   state: "Confirmations",
  //   access: true,
  //   sidebarProps: {
  //     displayText: "Confirmations",
  //     icon: <ThumbUpOffAltOutlinedIcon />,
  //   },
  // },
  {
    path: "/opptyPipepine",
    state: "opptyPipepine",
    access: true,
    sidebarProps: {
      displayText: "Opportunity Pipeline",
      icon: <ConfirmationNumberOutlinedIcon />,
    },
  },
  {
    path: "/crm",
    state: "CRM",
    access: true,
    sidebarProps: {
      displayText: "CRM",
      icon: <MailIcon />,
    },
  },

  {
    path: "/dealplan",
    state: "Deal Plan",
    access: true,
    sidebarProps: {
      displayText: "Deal Plan",
      icon: <CropLandscapeOutlinedIcon />,
    },
  },
  {
    path: "/invoice",
    state: "Invoice",
    access: true,
    sidebarProps: {
      displayText: "Invoice",
      icon: <ReceiptOutlinedIcon />,
    },
  },
  {
    path: "/operationcontrolroom",
    state: "Operation Control Room",
    access: true,
    sidebarProps: {
      displayText: "Opr Ctrl Room",
      icon: <ControlCameraOutlinedIcon />,
    },
  },

  {
    path: "/projectbudget",
    state: "Project Budget",
    access: true,
    sidebarProps: {
      displayText: "Project Budget",
      icon: <AccountTreeOutlinedIcon />,
    },
  },
  {
    path: "/quartercertification",
    state: "Quarter Certification",
    access: true,
    sidebarProps: {
      displayText: "Quarter Cert",
      icon: <WorkspacePremiumOutlinedIcon />,
    },
  },
  {
    path: "/realisedrevenue",
    state: "Realised Revenue",
    access: true,
    sidebarProps: {
      displayText: "Realised Revenue",
      icon: <WorkHistoryOutlinedIcon />,
    },
  },
  {
    path: "/talentmanagement",
    state: "Talent Management",
    access: true,
    sidebarProps: {
      displayText: "Talent Mgmt",
      icon: <ManageHistoryOutlinedIcon />,
    },
  },
  {
    path: "/actuals",
    state: "Actuals",
    access: true,
    sidebarProps: {
      displayText: "Actuals",
      icon: <PhotoSizeSelectActualOutlinedIcon />,
    },
  },
];

export default appRoutes;
