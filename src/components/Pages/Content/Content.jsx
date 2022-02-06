import React from "react";
import { Box, Container } from "@mui/material";

export default function Content() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ color: "inherit", position: "absolute" }}>
        <h1>Content Page!</h1>
      </Box>
    </Container>
  );
}
