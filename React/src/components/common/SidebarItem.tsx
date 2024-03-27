import { Link, useLocation } from "react-router-dom";
import colorConfigs from "../configs/colorConfigs";
import { RouteType } from "../../router/config";
import { useEffect, useState } from "react";
import MuiModules from "../../MUI-Module/MuiImports";

type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(location.pathname === item.path);
  }, [location.pathname, item.path]);

  useEffect(() => {
    // Save the active state to local storage
    localStorage.setItem("activeItem", isActive ? item.path ?? "" : "");
  }, [isActive, item.path]);

  const handleItemClick = () => {
    // event.preventDefault();
    // Set the active state when the item is clicked
    setIsActive(true);
    // sessionStorage.setItem("filterData", JSON.stringify({ items: [] }));
  };

  return item.sidebarProps && item.path ? (
    <MuiModules.UIListItemButton
      component={Link}
      to={item.path}
      onClick={handleItemClick}
      sx={{
        "&: hover": {
          backgroundColor: colorConfigs.sidebar.hoverBg,
        },
        backgroundColor: isActive
          ? colorConfigs.sidebar.activeBg
          : "transparent",
        paddingY: "12px",
        paddingX: "24px",
      }}
    >
      <MuiModules.UIListItemIcon>
        {item.sidebarProps.icon && item.sidebarProps.icon}
      </MuiModules.UIListItemIcon>
      {item.sidebarProps.displayText}
    </MuiModules.UIListItemButton>
  ) : null;
};

export default SidebarItem;
