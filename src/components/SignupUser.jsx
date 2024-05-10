import { useContext } from "react";

import { Box, Typography, TextField, Button, Grid, Stack } from "@mui/material";
import { Link } from "@mui/material";

import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";

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
                  onChange={(event) => {
                    onboardingCtx.updateSignupData({
                      type: "companyEmail",
                      data: event.target.value,
                    });
                  }}
                  value={onboardingCtx.companyEmail}
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
                  onChange={(event) => {
                    onboardingCtx.updateSignupData({
                      type: "companyPassword",
                      data: event.target.value,
                    });
                  }}
                  value={onboardingCtx.companyPassword}
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
                  onChange={(event) => {
                    onboardingCtx.updateSignupData({
                      type: "confirmCompanyPassword",
                      data: event.target.value,
                    });
                  }}
                  value={onboardingCtx.confirmCompanyPassword}
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
                      disabled={!onboardingCtx.checkValidInputForSignupStep()}
                    >
                      Next
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
          <Box width={"80%"} height={"4vh"} mt={2} textAlign={"center"}>
            <Typography variant="body1" fontWeight={"600"} color={"grey.600"}>
              Or
            </Typography>
          </Box>

          <Box width={"80%"}>
            <Box width={"80%"} mt={2} mx={"auto"}>
              <Stack spacing={1} height={"100px"}>
                <Box borderRadius={10} overflow={"hidden"} border={"1px solid"}>
                  <Button fullWidth startIcon={<FcGoogle size={"30px"} />}>
                    <Box sx={{ textTransform: "capitalize" }} color={"black"}>
                      Sign up With Google
                    </Box>
                  </Button>
                </Box>
                <Box borderRadius={10} overflow={"hidden"} border={"1px solid"}>
                  <Button
                    fullWidth
                    startIcon={<IoLogoApple size={"30px"} color="black" />}
                  >
                    <Box sx={{ textTransform: "capitalize" }} color={"black"}>
                      Sign up with apple
                    </Box>
                  </Button>
                </Box>
              </Stack>
            </Box>
            <Box width={"inherit"} mt={3} mx={"auto"} textAlign={"center"}>
              <Typography color={"grey.600"} variant="body2">
                Already have an account?{" "}
                <Link href="/" variant="body1">
                  Sign in here
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignupUser;
