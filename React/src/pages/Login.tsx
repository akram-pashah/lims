import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AuthUser, { CallGetVersionAPI, UserLogin } from "../components/AuthUser";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MuiModules from "../MUI-Module/MuiImports";
import MuiIcons from "../MUI-Module/Mui-Icons";
import SpinnerLoader from "../SpinnerLoader";

const validation = Yup.object({
  email: Yup.string().trim().required("Email is required"),
  passwordHash: Yup.string().trim().required("Password is required"),
});

type LoginProps = {
  onLogin: () => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    passwordHash: "",
  };
  const [error, setError] = useState<string | null>(null);
  const [AppVersion, setAppVersion] = useState<string | null>(null);

  const { setToken } = AuthUser();

  // check version
  useEffect(() => {
    fetchAppVersion();
  }, []);

  const fetchAppVersion = async () => {
    try {
      const response = await CallGetVersionAPI();

      if (response.data) {
        const result = response.data;
        const timestamp = new Date().getTime();
        if (localStorage.getItem("appVersion")) {
          if (result != localStorage.getItem("appVersion")) {
            localStorage.setItem("appVersion", result);

            window.location.href =
              window.location.pathname + `?timestamp=${timestamp}`;
          }
        } else {
          localStorage.setItem("appVersion", result);
          window.location.href =
            window.location.pathname + `?timestamp=${timestamp}`;
        }
        setAppVersion(result);
        setError("");
      }
    } catch (error) {
      setError(
        `Error fetching data. Please check console for details,${error}`
      );
    }
  };

  const { values, handleSubmit, errors, handleChange, handleBlur, touched } =
    useFormik({
      initialValues,
      validationSchema: validation,
      onSubmit: (values) => {
        console.log(values);
        handlePostRequest(event);
      },
    });

  const handlePostRequest = async (event: any) => {
    event.preventDefault();

    try {
      // const response = await UserLogin(values);
      // if (response) {
      //   setToken(response.data.token);
      //   sessionStorage.setItem("roleName", response.data.roleName);
      //   sessionStorage.setItem("selectedIndexSidebar", "0");
      //   onLogin();
      //   navigate("/dashboard");
      //   setError("");
      // } else {
      //   setError(`Error fetching data. Please check with management`);
      // }
      sessionStorage.setItem("selectedIndexSidebar", "0");
      onLogin();
      navigate("/home");
      setError("");
    } catch (error2: any) {
      setError(error2.response.statusText);
    }
  };

  return (
    <>
      {AppVersion !== null ? (
        <div className="bodycontent">
          <MuiModules.UIBox
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <MuiIcons.Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </MuiIcons.Avatar>
            <MuiModules.UITypography component="h1" variant="h5">
              Sign in LIMS
            </MuiModules.UITypography>

            <form onSubmit={handleSubmit}>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <MuiModules.UIGrid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 2, sm: 2, md: 2 }}
              >
                <MuiModules.UIGrid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <label htmlFor="Email">Email</label>
                  <MuiModules.UITextField
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p className="errorTextColor">{errors.email}</p>
                  ) : null}
                </MuiModules.UIGrid>
                <MuiModules.UIGrid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <label htmlFor="passwordHash">Password</label>
                  <MuiModules.UITextField
                    name="passwordHash"
                    id="passwordHash"
                    type="password"
                    placeholder="Password"
                    value={values.passwordHash}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.passwordHash && touched.passwordHash ? (
                    <p className="errorTextColor">{errors.passwordHash}</p>
                  ) : null}
                </MuiModules.UIGrid>
              </MuiModules.UIGrid>
              <MuiModules.UIButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </MuiModules.UIButton>
            </form>
          </MuiModules.UIBox>
        </div>
      ) : (
        <>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h3>
              Please wait while we check for the latest version of LIMS App
            </h3>
            <SpinnerLoader />
          </div>
        </>
      )}
    </>
  );
}

export default Login; 