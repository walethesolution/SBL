import React from "react";
import Header from "../landing-page/Header";
import Footer from "../landing-page/Footer";
import { Box } from "@mui/material";
import { Outlet, useParams } from "react-router-dom";

export default function Layout() {}

/*
If the path is default "/" render the first page, 
else if the path is any other given path, render the corresponding page 
else render the error page. 
 */

// How do i access the value for the path ?
