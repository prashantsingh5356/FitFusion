import { useContext } from "react";

import { Box, Typography, TextField, Button, Grid, Stack } from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

import OnboardingContext from "../context/OnboardingContext";

const SignupUser = () => {
  const onboardingCtx = useContext(OnboardingContext);

  const signupUserNextStepHandler = () => {
    onboardingCtx.incrementStepperVal();
  };

  return (
    <>
      <Box width={"100%"} height={"85vh"}>
        <Box width={"90%"} height={"80vh"} mx={"auto"} pt={2}>
          <Typography variant="h5" fontWeight={"bold"}>
            Hello! Welcome to Fit Fusion
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
                  id="companyEmail"
                  label="Company email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  size="small"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <TextField
                  size="small"
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-password"
                />
                <Grid container alignItems={"center"} gap={3}>
                  <Grid item xs>
                    <Typography variant="body2">
                      By signing up, I accept the company’s terms of use and
                      privacy policy
                    </Typography>
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
          <Box width={"80%"} height={"4vh"} mt={2}>
            <Typography variant="body1" gutterBottom>
              -------------------------------------- Or
              --------------------------------------
            </Typography>
          </Box>

          <Box width={"80%"}>
            <Box width={"70%"} height={"15vh"} mt={2} mx={"auto"}>
              <Stack spacing={1}>
                <Button
                  variant="outlined"
                  startIcon={<GoogleIcon fontSize="small" />}
                >
                  <Box sx={{ textTransform: "capitalize", m: 1 }}>
                    Sign up With Google
                  </Box>
                </Button>
                <Button variant="outlined" startIcon={<AppleIcon />}>
                  <Box sx={{ textTransform: "capitalize", m: 1 }}>
                    Sign up with apple
                  </Box>
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignupUser;
