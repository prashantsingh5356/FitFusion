//MUI Imports
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useContext } from "react";

import OnboardingContext from "../context/OnboardingContext";

const steps = ["Sign up", "Company Details", "Select Plan", "Final Setup"];

const HorizontalLinearStepper = () => {
  const onboardingCtx = useContext(OnboardingContext);

  return (
    <>
      <Box px={2} sx={{ width: "100%" }}>
        <Stepper activeStep={onboardingCtx.stepperValue}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </>
  );
};

export default HorizontalLinearStepper;
