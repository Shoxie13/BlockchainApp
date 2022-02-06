import React from "react";
import { Box, Typography, Button } from "@mui/material";

import { connectWallet } from "../../../Utils/Interact";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import Earth from "../../Planets/Earth/Earth";

export default function Home() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Box container>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "5%",
            transform: "translate(0%, -50%)",
            zIndex: 1,
          }}
        >
          <Typography variant="h4">
            The Blue Marble
            <span role="img" aria-label="emoji">
              🌍
            </span>
          </Typography>
          <Box container xs={0}>
            <Typography variant="subtitle1">
              Your universe is about the change!
            </Typography>
            <Typography variant="subtitle1">
              Step-in our world and prepare yourself <br /> for the ultimate
              adventure.
            </Typography>
          </Box>
          <Box
            sx={{
              mt: "20px",
              "& :hover": {
                transition: "scale(1.04)",
              },
            }}
          >
            <Button variant="outlined" color="inherit" onClick={connectWallet}>
              Connect Wallet
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
      <Earth />
    </Box>
  );
}
