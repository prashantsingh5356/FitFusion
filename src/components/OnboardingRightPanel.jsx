import { Box, Stack } from "@mui/material";
import HorizontalLinearStepper from "./HorizontalLinearStepper";

const OnboardingRightPanel = () => {
  return (
    <>
      <Box height={"96vh"} width={"80%"} bgcolor={"white"}>
        <Stack spacing={1}>
          <Box
            width={"100%"}
            height={"10vh"}
            display={"flex"}
            alignItems={"center"}
          >
            <HorizontalLinearStepper />
          </Box>
          <Box width={"100%"} height={"85vh"} bgcolor={"yellow"}>
            <Stack direction={"row"}>
              <Box width={"60%"} height={"85vh"} bgcolor={"magenta"}></Box>
              <Box width={"40%"} height={"85vh"} bgcolor={"green"}></Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default OnboardingRightPanel;
