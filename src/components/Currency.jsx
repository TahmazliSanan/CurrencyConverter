import React, { useState } from "react";
import "../css/Currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_c0GWQrRJlQiOWjuqieRZToarUtUb1NgbURIHZpUh";

function Currency() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState("");

  const convert = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const answer = (amount * response.data.data[toCurrency]).toFixed(2);
    setResult(answer);
  };

  return (
    <div className="currency-div">
      <div className="currency-header">
        <h3>CURRENCY CONVERTER</h3>
      </div>
      <div>
        <input
          type="number"
          className="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          className="from-currency-option"
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option>USD</option>
          <option>EUR</option>
          <option>RUB</option>
        </select>
        <FaRegArrowAltCircleRight className="circle-right" />
        <select
          className="to-currency-option"
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option>EUR</option>
          <option>RUB</option>
          <option>USD</option>
        </select>
        <input type="text" className="result" value={result} readOnly />
      </div>
      <div>
        <button className="convert-button" onClick={convert}>
          Convert
        </button>
      </div>
    </div>
  );
}

export default Currency;
