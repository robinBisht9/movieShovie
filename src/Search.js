import { useRef } from "react";
import { useKey } from "./useKey";

export default function Search({ query, setQuery }) {
  const inputElement = useRef(null);

  function actionOnEnter() {
    inputElement.current.focus();
    setQuery("");
  }
  useKey(actionOnEnter, "Enter");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElement}
    />
  );
}
