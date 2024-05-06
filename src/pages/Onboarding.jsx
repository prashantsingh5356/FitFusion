// Library Imports
import { Box, Container, Stack } from "@mui/material";

// Component Imports
import OnboardingLeftPanel from "../components/OnboardingLeftPanel";
import OnboardingRightPanel from "../components/OnboardingRightPanel";

const Onbaording = () => {
  return (
    <>
      <Box width={"99%"} pl={"1%"} height="100vh" bgcolor={"#2856be"}>
        <Stack direction={"row"}>
          <OnboardingLeftPanel />
          <OnboardingRightPanel />
        </Stack>
      </Box>
    </>
  );
};

export default Onbaording;
