import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

export default function Header() {
  function format(number) {
    return number.toFixed(3);
  }
  const [load, SetLoad] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.apilayer.com/fixer/latest?base=UAH&apikey=2vO91N0DnOHdhMOlJ26tLaNYq4C96Atz"
      )
      .then((response) => {
        SetLoad(response.data.rates);
      });
  }, []);
  if (!load) return null;

  return (
    <header className="App-header">
      <div className="title d-flex justify-content-start ">
        <a href="/#" target="_blank" alt="" className="m-2 bd-highlight">
          Конвертер валют
        </a>
      </div>
      <nav>
        <div className="d-flex justify-content-center">
          <ul className="navL">
            <ol>1 UAN = ${format((1 * load.USD) / load.UAH)} USD</ol>
            <ol>1 UAN = ${format((1 * load.EUR) / load.UAH)} EUR</ol>
          </ul>
        </div>
      </nav>
    </header>
  );
}
