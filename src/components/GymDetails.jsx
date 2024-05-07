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
                onChange={(event) =>
                  onboardingCtx.updateCompanyData({
                    type: "adminFirstName",
                    data: event.target.value,
                  })
                }
                value={onboardingCtx.adminFirstName}
                size="small"
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First name"
                name="text"
                autoComplete="text"
                autoFocus
              />
              <TextField
                onChange={(event) =>
                  onboardingCtx.updateCompanyData({
                    type: "adminLastName",
                    data: event.target.value,
                  })
                }
                value={onboardingCtx.adminLastName}
                size="small"
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last name"
                name="text"
                autoComplete="text"
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
                onChange={(event) =>
                  onboardingCtx.updateCompanyData({
                    type: "companyName",
                    data: event.target.value,
                  })
                }
                value={onboardingCtx.companyName}
                size="small"
                margin="normal"
                required
                fullWidth
                id="companyName"
                label="Company Name"
                name="text"
              />
              <TextField
                onChange={(event) =>
                  onboardingCtx.updateCompanyData({
                    type: "companyContactNumber",
                    data: event.target.value,
                  })
                }
                value={onboardingCtx.companyContactNumber}
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
                onChange={(event) =>
                  onboardingCtx.updateCompanyData({
                    type: "companyLocation",
                    data: event.target.value,
                  })
                }
                value={onboardingCtx.companyLocation}
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
                    disabled={
                      !onboardingCtx.checkValidInputForCompanyDataStep()
                    }
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
