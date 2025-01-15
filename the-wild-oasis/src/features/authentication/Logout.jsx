import React from "react";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowLeftEndOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

export default function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowLeftEndOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}
