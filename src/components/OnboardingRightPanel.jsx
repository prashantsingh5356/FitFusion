import { useContext } from "react";

import { Box, Stack } from "@mui/material";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import SignupUser from "./SignupUser";
import gym1_rm from "../assets/gym1_rm.png";
import panda_done_nobg from "../assets/panda_done_nobg.png";

import OnboardingContext from "../context/OnboardingContext";
import GymDetails from "./GymDetails";
import SubscriptionPlanComponent from "./SubscriptionPlanComponent";
import FinalSetupComponent from "./FinalSetupComponent";

const OnboardingRightPanel = () => {
  const onboardingCtx = useContext(OnboardingContext);
  return (
    <>
      <Box height={"100vh"} width={"80%"} bgcolor={"white"}>
        <Stack spacing={1}>
          <Box
            width={"100%"}
            height={"10vh"}
            display={"flex"}
            alignItems={"center"}
          >
            <HorizontalLinearStepper />
          </Box>
          {onboardingCtx.stepperValue !== 2 ? (
            <Box width={"100%"} height={"85vh"}>
              <Stack direction={"row"}>
                <Box width={"55%"} height={"89vh"}>
                  {onboardingCtx.stepperValue === 0 && <SignupUser />}
                  {onboardingCtx.stepperValue === 1 && <GymDetails />}
                  {onboardingCtx.stepperValue === 3 && <FinalSetupComponent />}
                </Box>
                <Box width={"45%"} height={"89vh"}>
                  <img
                    src={
                      onboardingCtx.stepperValue === 0 ||
                      onboardingCtx.stepperValue === 1
                        ? gym1_rm
                        : panda_done_nobg
                    }
                    alt={"test"}
                    loading="lazy"
                  />
                </Box>
              </Stack>
            </Box>
          ) : (
            <Box width={"100%"} height={"89vh"}>
              <SubscriptionPlanComponent />
            </Box>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default OnboardingRightPanel;
