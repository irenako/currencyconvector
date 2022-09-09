import "./App.css";
import Convertor from "./Convertor";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("USD");
  const [rates, setRates] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.apilayer.com/fixer/latest?&apikey=8Hu87H6aUUuAEI6uP0LAAPhc1VCps9tJ"
      )
      .then((response) => {
        setRates(response.data.rates);
      });
  }, []);
  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates]);

  function handleAmount1Change(amount1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }
  function handleCurrency1Change(currency1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }
  function handleAmount2Change(amount2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  }
  function handleCurrency2Change(currency1) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }
  function format(number) {
    return number.toFixed(3);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="title d-flex justify-content-start ">
          <a href="/#" target="_blank" alt="" className="m-2 bd-highlight">
            Конвертер валют
          </a>
        </div>
        <nav>
          <div className="d-flex justify-content-center">
            <ul className="navL">
              <ol>1 UAN = 37,313 USD</ol>
              <ol>1 UAN = 37,453 EUR</ol>
            </ul>
          </div>
        </nav>
      </header>
      <div className="convertor">
        <Convertor
          onAmountChange={handleAmount1Change}
          onCurrencyChange={handleCurrency1Change}
          currencies={Object.keys(rates)}
          amount={amount1}
          currency={currency1}
        />
        <div className="equals">=</div>
        <Convertor
          onAmountChange={handleAmount2Change}
          onCurrencyChange={handleCurrency2Change}
          currencies={Object.keys(rates)}
          amount={amount2}
          currency={currency2}
        />
      </div>
    </div>
  );
}
