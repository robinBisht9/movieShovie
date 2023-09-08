import { useEffect } from "react";

export function useKey(action, key) {
  useEffect(
    function () {
      function closeMovie(event) {
        if (event.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", closeMovie);

      return function () {
        document.removeEventListener("keydown", closeMovie);
      };
    },
    [action, key]
  );
}
