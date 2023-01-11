import React, { Component, PropTypes } from "react";
import HomeComponent from "./index";
import { Container } from "@nextui-org/react";
import NavbarComponent from "../Router/Navbar";
import "../global.css";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { createTheme, NextUIProvider } from "@nextui-org/react"

const lightTheme = createTheme({
  type: 'light',
  theme: {
     // optional
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    // optional
  }
})

export default class AppComponent extends Component {
  render() {
    return (
      <NextThemeProvider 
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <NavbarComponent />
        </NextUIProvider>
      </NextThemeProvider>
    );
  }
}
