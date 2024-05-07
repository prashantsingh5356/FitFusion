import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import OnboardingContext from "../context/OnboardingContext";
import EmployeeEmail from "./EmployeeEmail";

const FinalSetupComponent = () => {
  const navigate = useNavigate();
  const onboardingCtx = useContext(OnboardingContext);

  const stepperPrevHandler = () => {
    onboardingCtx.decrementStepperVal();
  };
  const signupUserNextStepHandler = () => {
    prompt("Redirect user to Dashboard");
    // onboardingCtx.incrementStepperVal();
    onboardingCtx.resetStepperVal();
    navigate("/");
  };
  return (
    <>
      <Box width={"100%"} height={"inherit"}>
        <Box width={"90%"} height={"80vh"} mx={"auto"} pt={2} mt={4}>
          <Typography variant="h5" fontWeight={"bold"}>
            Invite Your Staff or Members !
          </Typography>
          <Box width={"80%"} mt={2}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                display={"flex"}
                width={"100%"}
                height={"40vh"}
                flexDirection={"column"}
                justifyContent={"space-around"}
              >
                <TextField
                  size="small"
                  margin="normal"
                  required
                  fullWidth
                  id="employeeEmail"
                  label="Employee email"
                  name="email"
                  type="email"
                  autoFocus
                />
                <Box
                  width={"inherit"}
                  height={"20vh"}
                  border={"1px solid"}
                  borderRadius={2}
                  overflow={"scroll"}
                >
                  <Box display={"flex"} flexWrap={"wrap"}>
                    <EmployeeEmail />
                    <EmployeeEmail />
                    <EmployeeEmail />
                  </Box>
                </Box>
                <Grid container alignItems={"center"} gap={3}>
                  <Grid item xs>
                    <IconButton
                      aria-label="delete"
                      onClick={stepperPrevHandler}
                    >
                      <ArrowBackIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      onClick={signupUserNextStepHandler}
                    >
                      Finish
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FinalSetupComponent;
