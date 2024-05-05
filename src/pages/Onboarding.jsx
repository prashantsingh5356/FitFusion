// Library Imports
import { Box, Container, Stack } from "@mui/material";

// Component Imports
import OnboardingLeftPanel from "../components/OnboardingLeftPanel";
import OnboardingRightPanel from "../components/OnboardingRightPanel";

const Onbaording = () => {
  return (
    <>
      <Box width={"98vw"} padding={"1%"} height="98vh" bgcolor={"red"}>
        <Stack direction={"row"}>
          <OnboardingLeftPanel />
          <OnboardingRightPanel />
        </Stack>
      </Box>
    </>
  );
};

export default Onbaording;
