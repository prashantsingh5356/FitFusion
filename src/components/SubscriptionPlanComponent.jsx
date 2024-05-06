import { Box } from "@mui/material";
import { Typography, Stack } from "@mui/material";
import { useState, useContext } from "react";

import OnboardingContext from "../context/OnboardingContext";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import SubscriptionPlanCard from "./SubscriptionPlanCard";
import IconButton from "@mui/material/IconButton";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Plan Name",
    Mcost: "10",
    Ycost: "100",
    info: "Small info section for quick view",
    features: [
      "test 1 sndlwnd",
      "Test 2 sndlkqwnf",
      "Test 3 jdblqwnfd",
      "Test 3 jdblqwnfd",
    ],
  },
  {
    id: 2,
    name: "Plan Name",
    Mcost: "10",
    Ycost: "100",
    info: "Small info section for quick view",
    features: [
      "test 1 sndlwnd",
      "Test 2 sndlkqwnf",
      "Test 3 jdblqwnfd",
      "Test 3 jdblqwnfd",
    ],
  },
  {
    id: 3,
    name: "Plan Name",
    Mcost: "10",
    Ycost: "100",
    info: "Small info section for quick view",
    features: [
      "test 1 sndlwnd",
      "Test 2 sndlkqwnf",
      "Test 3 jdblqwnfd",
      "Test 3 jdblqwnfd",
      "Test 3 jdblqwnfd",
    ],
  },
  {
    id: 4,
    name: "Custom Plan Name",
    Mcost: "10",
    Ycost: "100",
    info: "Small info section for quick view",
    features: [
      "test 1 sndlwnd",
      "Test 2 sndlkqwnf",
      "Test 3 jdblqwnfd",
      "Test 3 jdblqwnfd",
      "Test 3 jdblqwnfd",
    ],
  },
];

const SubscriptionPlanComponent = () => {
  const [planDuration, setPlanDuration] = useState("month");

  const onboardingCtx = useContext(OnboardingContext);

  const handlePlanDuration = (event, planType) => {
    setPlanDuration(planType);
  };

  const signupUserPrevStep = () => {
    onboardingCtx.decrementStepperVal();
  };
  return (
    <Box width={"100%"} height={"inherit"}>
      <Stack spacing={1}>
        <Box width={"10%"} px={2}>
          <IconButton aria-label="delete" onClick={signupUserPrevStep}>
            <ArrowBackIcon />
          </IconButton>
        </Box>

        <Box width={"inherit"} height={"12vh"}>
          <Box
            width={"inherit"}
            height={"inherit"}
            display={"flex"}
            justifyContent={"space-between"}
            px={3}
            alignItems={"center"}
          >
            <Box>
              <Typography
                variant="h4"
                fontWeight={"bold"}
                borderColor={"1px solid black"}
              >
                Select plan that help's you grow
              </Typography>
              <Typography variant="h6" fontWeight={"bold"} color={"grey.500"}>
                Read all plan or contact us we will guide you better.
              </Typography>
            </Box>

            <Box>
              <ToggleButtonGroup
                value={planDuration}
                exclusive
                onChange={handlePlanDuration}
                aria-label="Plan duration"
              >
                <ToggleButton value="month" aria-label="Monthly cost">
                  Monthly
                </ToggleButton>
                <ToggleButton value="year" aria-label="Yearly cost">
                  Yearly
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Box>
        </Box>
        <Box
          width={"inherit"}
          minHeight={"62vh"}
          display={"flex"}
          justifyContent={"space-around"}
          pt={3}
          border={"1px solid"}
        >
          {DUMMY_DATA.map((plan, i) => {
            return (
              <SubscriptionPlanCard
                key={i}
                planData={plan}
                durationOfPlan={planDuration}
              />
            );
          })}
        </Box>
      </Stack>
    </Box>
  );
};

export default SubscriptionPlanComponent;
