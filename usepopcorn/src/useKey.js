import { useEffect } from "react";

export function useKey(action, key) {
  useEffect(function () {
    function callBack(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    }
    document.addEventListener("keydown", callBack);
    return function () {
      document.removeEventListener("keydown", callBack);
      console.log("Clean up effect for closing movie");
    };
  });
  return key;
}
