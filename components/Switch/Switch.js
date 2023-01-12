import React, { Component } from "react";
import { Switch } from "@nextui-org/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "next-themes";

export default function SwitchComponent() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <Switch
      color="secondary"
      checked={isDark}
      onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      iconOn={<FaSun />}
      iconOff={<FaMoon />}
    ></Switch>
  );
}
