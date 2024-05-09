import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import BreadcrumbsComponent from "./BreadcrumbsComponent";
import AccountSettingsMenu from "./AccountSettingsMenu";

const DashboardTopNaviagtionPanel = () => {
  return (
    <Box
      width={"100%"}
      height={"inherit"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        className="topNavigationBar"
        width={"96%"}
        height={"100px"}
        borderRadius={4}
        overflow={"hidden"}
        display={"flex"}
        justifyContent={"space-between"}
        px={"13px"}
      >
        <Box
          width={"40%"}
          height={"inherit"}
          display={"flex"}
          alignItems={"end"}
        >
          <Box width={"100%"} height={"80px"}>
            <BreadcrumbsComponent />
            <Typography variant="h4" fontWeight={600}>
              Home Dashboard
            </Typography>
          </Box>
        </Box>
        <Box
          width={"40%"}
          height={"inherit"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"end"}
        >
          <Box
            width={"90%"}
            height={"60px"}
            bgcolor={"white"}
            borderRadius={10}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box width={"75%"} height={"inherit"}></Box>
            <Box
              width={"20%"}
              height={"inherit"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <AccountSettingsMenu />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardTopNaviagtionPanel;
