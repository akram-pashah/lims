import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Outlet, useNavigate } from "react-router-dom";
import "../App.css";
import SidebarItemCollapse from "./common/SidebarItemCollapse";
import SidebarItem from "./common/SidebarItem";
import React, { Key, useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import MuiModules from "../MUI-Module/MuiImports";

const drawerWidth = 260;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

type SidebarProps = {
  updateData: any[]
};

const Sidebar: React.FC<SidebarProps> = ({ updateData }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const handelLogout = () => {
    sessionStorage.clear();
    navigate("/", { replace: false });
  };
  const getSessionToken = () => {
    const tokenString: string = sessionStorage.getItem("token") ?? "{}";
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  useEffect(() => {
    const token = getSessionToken();

    if (token) {
      const myDecodedToken: any = decodeToken(token);
      console.log(myDecodedToken);
      setUser(myDecodedToken);
    }
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <MuiModules.UIBox sx={{ display: "flex" }}>
      <MuiModules.UICssBaseline />
      <AppBar position="fixed" open={open}>
        <MuiModules.UIToolbar>
          <MuiModules.UIIconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </MuiModules.UIIconButton>
          <MuiModules.UIGrid container justifyContent="flex-start">
            <MuiModules.UITypography variant="h6" noWrap component="div">
              LIMS
            </MuiModules.UITypography>
          </MuiModules.UIGrid>
          <MuiModules.UIGrid container justifyContent="flex-end">
            {user?.Displayname}
            &nbsp;
            <span style={{ cursor: "pointer" }} onClick={handelLogout}>
              Logout
            </span>
          </MuiModules.UIGrid>
        </MuiModules.UIToolbar>
      </AppBar>
      <MuiModules.UIDrawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          LIMS
          <MuiModules.UIIconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </MuiModules.UIIconButton>
        </DrawerHeader>
        <MuiModules.UIDivider />
        <MuiModules.UIList>
          {updateData
            .filter((route: any) => (route.access ? true : false)) // Filter based on the 'access' property
            .map((route: any, index: any) =>
              route.sidebarProps ? (
                route.child ? (
                  <SidebarItemCollapse item={route} key={index} />
                ) : (
                  <SidebarItem item={route} key={index} />
                )
              ) : null
            )}
        </MuiModules.UIList>
      </MuiModules.UIDrawer>
      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </MuiModules.UIBox>
  );
}

export default Sidebar;