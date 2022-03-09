import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
      onSearch={city}
    >
      <input
        className="barra"
        type="text"
        value={city}
        placeholder="Ciudad..."
        onChange={(e) => {
          e.preventDefault();
          setCity(e.target.value);
        }}
      />
      <input className="bot" type="submit" value="Agregar" />
    </form>
  );
}
