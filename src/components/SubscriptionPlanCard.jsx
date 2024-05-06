import { useContext } from "react";

import { Box } from "@mui/system";
import { Button, Stack, Typography } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import OnboardingContext from "../context/OnboardingContext";

const SubscriptionPlanCard = (props) => {
  const onbaordingCtx = useContext(OnboardingContext);

  const userFinalStepHandler = () => {
    onbaordingCtx.incrementStepperVal();
  };

  return (
    <Box
      width={"20%"}
      height={"55vh"}
      border={"1px solid "}
      borderColor={"grey.500"}
      px={2}
      py={1}
      borderRadius={5}
    >
      <Typography variant="h6">{props.planData.name}</Typography>
      <Typography variant="h4" mt={"10px"}>
        {props.durationOfPlan == "month"
          ? "₨ " + props.planData.Mcost
          : "₨ " + props.planData.Ycost}{" "}
        / {props.durationOfPlan == "month" ? "Month" : "Year"}
      </Typography>
      <Typography variant="body2" mt={"10px"}>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Typography>
      <Box width={"100%"} mt={"10px"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"34vh"}
        >
          <Box width={"100%"} height={"26vh"}>
            <List>
              {props.planData.features.map((feature, i) => {
                return (
                  <>
                    <ListItem key={i} disablePadding>
                      <ListItemIcon>
                        <CheckCircleIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>{feature} </ListItemText>
                    </ListItem>
                  </>
                );
              })}
            </List>
          </Box>
          <Button variant="outlined" onClick={userFinalStepHandler}>
            <Box sx={{ textTransform: "capitalize", m: 1 }}>Choose Plan</Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SubscriptionPlanCard;
