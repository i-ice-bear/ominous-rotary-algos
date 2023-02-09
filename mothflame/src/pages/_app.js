import "@/styles/globals.css";
import React from "react";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {}, // optional
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      link: '#5E1DAD',
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',
      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',
      myColor: '#ff4ecd'

    }, 
    fonts: {
      
    }
  },
});

const AppComponent = ({ Component, PageProps }) => {
  return (
    <>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Component {...PageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </>
  );
};

export default AppComponent;
