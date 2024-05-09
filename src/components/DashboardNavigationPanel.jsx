import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Box, Icon } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import routes from "../dashboardRoutes";
import DraftsIcon from "@mui/icons-material/Drafts";

const navIcons = {
  Home: <DraftsIcon />,
  "Test Test 2": <DraftsIcon />,
  "Test Test 3": <DraftsIcon />,
};

const DashboardNavigationPanel = () => {
  const [open, setOpen] = useState("");

  const navigate = useNavigate();

  const handleClick = (event) => {
    let listButtonRootDiv;
    let tempElement = event.target;

    while (tempElement.getAttribute("listtype") === null) {
      tempElement = tempElement.parentElement;
    }
    listButtonRootDiv = tempElement;
    let listType = listButtonRootDiv.getAttribute("listtype");
    console.log(listButtonRootDiv.getAttribute("listtype"));

    if (listType === open) return setOpen("");

    setOpen(listType);
  };

  return (
    <Box width={"100%"} height={"inherit"} bgcolor={"#FFF"}>
      <Box
        width={"inherit"}
        height={"15vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        fontSize={"3rem"}
      >
        FIT FUSION
      </Box>
      <Box width={"inherit"} height={"85vh"} className="sidebar">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "#FFF" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {routes.map((route) => {
            return (
              <>
                {route.childElements.length === 0 ? (
                  <Link
                    to={`/${route.parentPath}/${route.listText
                      .split(" ")
                      .join("")
                      .toLocaleLowerCase()}`}
                  >
                    <ListItemButton>
                      <ListItemIcon>{navIcons[route.listText]}</ListItemIcon>
                      <ListItemText primary={route.listText} />
                    </ListItemButton>
                  </Link>
                ) : (
                  <>
                    {" "}
                    <ListItemButton
                      listtype={route.listText}
                      onClick={handleClick}
                    >
                      <ListItemIcon>{navIcons[route.listText]}</ListItemIcon>
                      <ListItemText primary={route.listText} />
                      {open === route.listText ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </ListItemButton>
                    <Collapse
                      in={open === route.listText}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {route.childElements.map((childRoute) => {
                          return (
                            <Link
                              to={`/${route.parentPath}/${childRoute.listText
                                .split(" ")
                                .join("")
                                .toLocaleLowerCase()}`}
                            >
                              <ListItemButton sx={{ pl: 10 }}>
                                <ListItemText primary={childRoute.listText} />
                              </ListItemButton>
                            </Link>
                          );
                        })}
                      </List>
                    </Collapse>
                  </>
                )}
              </>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default DashboardNavigationPanel;
