import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import DashboardNavigationPanel from "../components/DashboardNavigationPanel";
import DashboardTopNaviagtionPanel from "../components/DashboardTopNaviagtionPanel";

const Dashboard = () => {
  return (
    <Box width={"100%"} height={"100vh"}>
      <Box width={"inherit"} height={"inherit"} display={"flex"}>
        <Box width={"20%"} height={"inherit"}>
          <DashboardNavigationPanel />
        </Box>
        <Box width={"80%"} height={"inherit"} bgcolor={"#EEF5FF"}>
          <Box position={"absolute"} top={"0px"} width={"79%"} height={"15vh"}>
            <DashboardTopNaviagtionPanel />
          </Box>
          <Box pt={15} width={"100%"} maxHeight={"84vh"} overflow={"scroll"}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
