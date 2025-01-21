import { useDarkMode } from "../context/DarkModeContext";
import { HiOutlineMoon, HiMiniSun } from "react-icons/hi2";
import React from "react";
import ButtonIcon from "./ButtonIcon";

export default function DarkmodeToggle() {
  const { isDarkMode, toogleDarkMode } = useDarkMode();
  return (
    <ButtonIcon onClick={toogleDarkMode}>
      {isDarkMode ? <HiMiniSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}
