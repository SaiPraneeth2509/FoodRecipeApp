import { useState } from "react";

export function Search() {
  const [query, setQuery] = useState("pizza");
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
