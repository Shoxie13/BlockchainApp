import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";
import { Box } from "@mui/system";

import About from "../components/Pages/About/About";
import Content from "../components/Pages/Content/Content";
import Home from "../components/Pages/Home/Home";

export default function Routing() {
  return (
    <Box container>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/content" element={<Content />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Box>
  );
}
