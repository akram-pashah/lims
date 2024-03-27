import { useState } from "react";
import colorConfigs from "../configs/colorConfigs";
import SidebarItem from "./SidebarItem";
import { RouteType } from "../../router/config";
import MuiModules from "../../MUI-Module/MuiImports";
import MuiIcons from "../../MUI-Module/Mui-Icons";

type Props = {
  item: RouteType;
};

const SidebarItemCollapse = ({ item }: Props) => {
  const [open, setOpen] = useState(false);

  return item.sidebarProps ? (
    <>
      <MuiModules.UIListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          "&: hover": {
            backgroundColor: colorConfigs.sidebar.hoverBg,
          },
          paddingY: "12px",
          paddingX: "24px",
        }}
      >
        <MuiModules.UIListItemIcon>
          {item.sidebarProps.icon && item.sidebarProps.icon}
        </MuiModules.UIListItemIcon>
        <MuiModules.UIListItemText
          disableTypography
          primary={
            <MuiModules.UITypography>
              {item.sidebarProps.displayText}
            </MuiModules.UITypography>
          }
        />
        {open ? (
          <MuiIcons.ExpandLessOutlinedIcon />
        ) : (
          <MuiIcons.ExpandMoreOutlinedIcon />
        )}
      </MuiModules.UIListItemButton>
      <MuiModules.UICollapse in={open} timeout="auto">
        <MuiModules.UIList>
          {item.child
            ?.filter((route) => (route.access ? true : false))
            .map((route, index) =>
              route.sidebarProps ? (
                route.child ? (
                  <SidebarItemCollapse item={route} key={index} />
                ) : (
                  <SidebarItem item={route} key={index} />
                )
              ) : null
            )}
        </MuiModules.UIList>
      </MuiModules.UICollapse>
    </>
  ) : null;
};

export default SidebarItemCollapse;
