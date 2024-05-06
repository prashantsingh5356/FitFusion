import { Box, Typography, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const EmployeeEmail = (props) => {
  return (
    <>
      <Box
        borderRadius={2}
        bgcolor={"grey.300"}
        display={"flex"}
        alignItems={"center"}
        minWidth={"40px"}
        height={"20px"}
        p={1}
        ml={"2px"}
        mt={"2px"}
      >
        <Typography variant="caption" gutterBottom>
          {"prashantsingh@gmail.com"}
        </Typography>
        <Box pl={"2px"}>
          <IconButton aria-label="delete">
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default EmployeeEmail;
