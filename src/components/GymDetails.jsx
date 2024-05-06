import { useContext } from "react";

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
import GymAddressComponent from "./GymAddressComponent";

const GymDetails = () => {
  const onboardingCtx = useContext(OnboardingContext);

  const signupUserPrevStepHandler = () => {
    onboardingCtx.decrementStepperVal();
  };
  const signupUserNextStepHandler = () => {
    onboardingCtx.incrementStepperVal();
  };

  return (
    <>
      <Box width={"100%"} height={"85vh"}>
        <Box width={"90%"} height={"80vh"} mx={"auto"} pt={2}>
          <Typography variant="h5" fontWeight={"bold"}>
            Help us personalise your experience!
          </Typography>
          <Box width={"80%"} mt={2}>
            <Box display={"flex"} flexDirection={"row"} gap={1}>
              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First name"
                name="text"
                autoComplete="text"
              />
              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last name"
                name="text"
                autoComplete="text"
                autoFocus
              />
            </Box>
            <Box
              display={"flex"}
              width={"100%"}
              height={"55vh"}
              flexDirection={"column"}
              justifyContent={"space-around"}
            >
              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                id="companyName"
                label="Company Name"
                name="text"
              />
              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                id="phoneNumber"
                label="Contact Number"
                name="phone"
                type="tel"
              />
              <TextField
                size="small"
                margin="normal"
                required
                fullWidth
                id="gymLocation"
                label="Location"
                name="text"
                type="text"
              />
              <GymAddressComponent />
              <Grid container alignItems={"center"} mt={1} gap={3}>
                <Grid item xs>
                  <IconButton
                    aria-label="delete"
                    onClick={signupUserPrevStepHandler}
                  >
                    <ArrowBackIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={signupUserNextStepHandler}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GymDetails;
