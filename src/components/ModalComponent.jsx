import { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

import OnboardingContext from "../context/OnboardingContext";

const style = {
  position: "absolute",
  top: "55%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: 1095,
  height: 540,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

const ModalComponent = (props) => {
  const onboardingCtx = useContext(OnboardingContext);

  const finalSetupHandler = () => {
    onboardingCtx.incrementStepperVal();
  };
  return (
    <div>
      <Modal
        open={props.showModal}
        onClose={props.changeShowModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box width={"inherit"} height={"inherit"}>
            <Box
              height={"inherit"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <Box
                width={"inherit"}
                height={"58px"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Box>
                  <Typography variant="h4" fontWeight={600}>
                    Plan Name will be here
                  </Typography>
                </Box>
                <Box>
                  <IconButton
                    aria-label="delete"
                    size="large"
                    onClick={props.changeShowModal}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                </Box>
              </Box>
              <Box width={"inherit"} height={"480px"} s display={"flex"}>
                <Box width={"60%"} height={"400px"}>
                  <Box
                    width="100%"
                    borderRadius={3}
                    height={"420px"}
                    overflow={"hidden"}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/OyVX4IWPHBI`}
                      height="420px"
                      width="100%"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title="video"
                    />
                  </Box>
                  <Box width={"100%"} height={"60px"}>
                    <Box width={"60%"} mt={"8px"} mx={"auto"}>
                      <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        onClick={finalSetupHandler}
                      >
                        Select Plan
                      </Button>
                    </Box>
                  </Box>
                </Box>
                <Box width={"40%"} height={"inherit"} px={1}>
                  <Typography variant="h5" fontWeight={500} color={"grey.800"}>
                    Features 🤩
                  </Typography>
                  <Box
                    width={"100%"}
                    minHeight={"200px"}
                    maxHeight={"440px"}
                    border={"1px solid"}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
