import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import "./NavBar.css";

export default function NavBar(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function textTrunc(text) {
    if (text > 1) {
      return text[0].substring(0, 5) + "..." + text[0].substring(38, 42);
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
            color: "white",
          }}
        >
          <ButtonGroup color="inherit" variant="text">
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box>
                <Button href="#Home" className="button-group">
                  <div className="main-container">
                    <h2 className="earth effect1 layers" data-text="Home">
                      <span>Home</span>
                    </h2>
                  </div>
                </Button>
              </Box>
              <Box>
                <Button href="#" className="button-group">
                  <div className="main-container">
                    <h2 className="earth effect3 layers" data-text="🌍">
                      <span role="img" aria-label="emoji">
                        🌍
                      </span>
                    </h2>
                  </div>
                </Button>
              </Box>
              <Box>
                <Button href="#About" className="button-group">
                  <div className="main-container">
                    <h2 className="earth effect2 layers" data-text="About">
                      <span>About</span>
                    </h2>
                  </div>
                </Button>
              </Box>
            </Box>
          </ButtonGroup>

          <Box
            sx={{
              "& :hover": {
                transform: "scale(1.02)",
                cursor: "pointer",
              },
            }}
          >
            <div className="main-container">
              <h2 className="earth effect3 layers" data-text="x">
                <span role="img" aria-label="emoji">
                  <Avatar
                    alt=""
                    src=""
                    onClick={handleMenu}
                    sx={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "transparent",
                    }}
                  >
                    <AccountBalanceWalletIcon
                      sx={{ width: "15px", height: "15px" }}
                    />
                  </Avatar>
                  <Menu
                    id="menu-appbar"
                    sx={{
                      "& .MuiList-root": {
                        paddingTop: "0px",
                        paddingBottom: "0px",
                      },
                      "& .MuiList-root :hover": {
                        backgroundColor: "#212120",
                      },
                    }}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Button
                        href="#walletButton"
                        onClick={handleClose}
                        sx={{
                          color: "white",
                          backgroundColor: "black",
                          cursor: "pointer",
                          fontSize: 12,
                          textTransform: "none",
                          border: 2,
                        }}
                      >
                        {props.acc ? textTrunc(props.acc) : "0x0"}
                      </Button>
                    </Box>
                  </Menu>
                </span>
              </h2>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
