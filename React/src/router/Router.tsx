import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../pages/Login";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
// import rolesData from "../components/common/rolesData";

import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";

const Router = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [appRoutes, setAppRoutes] = useState<any>([]);
    const roles = sessionStorage.getItem("roleName");
    useEffect(() => {
        // if (roles) {
        handleLogin();
        // }
    }, []);

    const handleLogin = () => {
        setLoggedIn(true);
        // const roles = sessionStorage.getItem("roleName");
        // let myRole: string[] = [];
        // if (roles) {
        //     myRole = roles.split(",");
        // }
        // let isAdminExists = false;
        // if (myRole) {
        //     const roleCheck = (role: string) => myRole.includes(role);

        //     // AppConfigAdmin = roleCheck("App Config Admin");
        //     isAdminExists = roleCheck("Admin");
        // }

        const newRoutes = [
            {
                path: "/home",
                state: "Home",
                access: true,
                sidebarProps: {
                    displayText: "Home",
                    icon: <ConfirmationNumberOutlinedIcon />,
                },
            },
            {
                path: '/jobs',
                state: "Jobs",
                access: true,
                sidebarProps: {
                    displayText: "Jobs",
                    icon: <ConfirmationNumberOutlinedIcon />,
                },
            },
        ]

        setAppRoutes(newRoutes);
    };
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Login onLogin={handleLogin} />} /> */}
                    {isLoggedIn ? (
                        <Route element={<ProtectedRoutes />}>
                            <Route element={<Sidebar updateData={appRoutes} />}>
                                <Route path="/home" element={<Home />} />
                                <Route path="/jobs" element={<Jobs />} />
                            </Route>
                        </Route>
                    ) : (
                        <Route path="/" element={<Login onLogin={handleLogin} />}></Route>
                    )}

                    <Route path="/" element={<Login onLogin={handleLogin} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Router;
