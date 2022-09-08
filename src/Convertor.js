import React from "react";

import "./Convertor.css";

export default function Convertor() {
  return (
    <div className="Convertor">
      <input type="number" className="input" />
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="UAN">UAN</option>
      </select>
    </div>
  );
}
