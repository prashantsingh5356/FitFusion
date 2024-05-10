// Library Imports
import { useNavigate } from "react-router-dom";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppleIcon from "@mui/icons-material/Apple";

import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/onboarding">
        Fit Fusion
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();

  const signUpUpserHandler = () => {
    navigate("/onboarding");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    navigate("/dashboard/home");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://uploads-ssl.webflow.com/6206c63bc60b663e47db1974/63d19c828a40c0a6164eeb2c_bearsprout_a_man_deadlifting.png)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" fontWeight={800}>
              Welcome Back!
            </Typography>
            {/* <Typography variant="body2" fontWeight={800} color={"grey.500"}>
              Sign in to continue
            </Typography> */}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Grid container alignItems={"center"}>
                <Grid item xs>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                </Grid>
                <Grid item>
                  <Link href="#" variant="body1">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Box
                width={"inherit"}
                mb={2}
                textAlign={"center"}
                fontWeight={"600"}
                fontFamily={"serif"}
                color={"grey.600"}
              >
                or
              </Box>
              <Box
                width={"inherit"}
                height={"100px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
              >
                <Box border={"1px solid"} borderRadius={10} overflow={"hidden"}>
                  {" "}
                  <Button
                    fullWidth
                    variant="none"
                    startIcon={<FcGoogle size={"30px"} />}
                  >
                    <Box sx={{ textTransform: "capitalize" }} color={"black"}>
                      Sign in With Google
                    </Box>
                  </Button>
                </Box>
                <Box border={"1px solid"} borderRadius={10} overflow={"hidden"}>
                  <Button
                    fullWidth
                    variant="none"
                    startIcon={<IoLogoApple size={"30px"} color="black" />}
                  >
                    <Box sx={{ textTransform: "capitalize" }} color={"black"}>
                      Sign in with apple
                    </Box>
                  </Button>
                </Box>
              </Box>
              <Box width={"inherit"} mt={3} textAlign={"center"}>
                <Typography color={"grey.600"} variant="body2">
                  Don't have an account?{" "}
                  <Link href="/onboarding" variant="body1">
                    Sign up for free
                  </Link>
                </Typography>
              </Box>
              <Copyright sx={{ mt: 4 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
