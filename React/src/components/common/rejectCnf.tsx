import { useFormik } from "formik";
import MuiModules from "../../MUI-Module/MuiImports";
import * as Yup from "yup";

const validation = Yup.object({
  Reason: Yup.string().required("Reason is required"),
});

const RejectReason = (props) => {
  const { isOpen, onClose, submitAPI, inputReason } = props;

  const handleClose = () => {
    onClose(true);
  };

  const initialValues = {
    Reason: "",
  };

  const { values, handleSubmit, errors, handleChange, handleBlur } = useFormik({
    initialValues,
    validationSchema: validation,
    onSubmit: () => {
      inputReason(values.Reason);
      submitAPI(true);
      handleClose();
    },
  });

  return (
    <div className="content">
      <MuiModules.UIBox sx={{ height: 400, width: "100%" }}>
        <MuiModules.UIDialog open={isOpen} onClose={handleClose}>
          <form onSubmit={handleSubmit}>
            <MuiModules.UIDialogTitle>
              <h3>Reject Confirmation</h3>
            </MuiModules.UIDialogTitle>
            <MuiModules.UIDialogContent>
              <MuiModules.UIGrid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 2, sm: 2, md: 2 }}
              >
                <MuiModules.UIGrid
                  item
                  xs={6}
                  sm={6}
                  md={12}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <label htmlFor="Reason">Reason</label>
                  <MuiModules.UITextField
                    name="Reason"
                    id="Reason"
                    multiline
                    value={values.Reason}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputProps={{
                      style: {
                        padding: "0.3rem",
                      },
                    }}
                  />
                  {errors.Reason && errors.Reason ? (
                    <p className="errorTextColor">{errors.Reason}</p>
                  ) : null}
                  <div style={{ height: "50px", width: "500px" }}></div>
                </MuiModules.UIGrid>
              </MuiModules.UIGrid>

              <div style={{ justifyContent: "flex-start", display: "flex" }}>
                <>
                  <MuiModules.UIButton
                    variant="contained"
                    size="small"
                    color="primary"
                    type="submit"
                    // onClick={handlerejectfun}
                  >
                    Reject
                  </MuiModules.UIButton>{" "}
                  &nbsp; &nbsp;
                  <MuiModules.UIButton
                    variant="outlined"
                    size="small"
                    color="primary"
                    type="reset"
                    onClick={onClose}
                  >
                    Close
                  </MuiModules.UIButton>
                </>
              </div>
            </MuiModules.UIDialogContent>
          </form>
        </MuiModules.UIDialog>
      </MuiModules.UIBox>
    </div>
  );
};

export default RejectReason;
