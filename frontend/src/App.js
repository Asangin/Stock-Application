import React, { useState, useEffect } from "react";
import StockChart from "./components/StockChart";

function App() {
  const [stockData, setStockData] = useState(null);
  const [ticker, setTicker] = useState("AAPL");

  useEffect(() => {
    fetch(`http://localhost:8000/stock/${ticker}`)
      .then((res) => res.json())
      .then((data) => setStockData(data));
  }, [ticker]);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>📈 Stock Dashboard</h1>

      <div>
        <input
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value.toUpperCase())}
        />
        <button onClick={() => setTicker(ticker)}>Load</button>
      </div>

      {stockData ? (
        <>
          <h2>{stockData.info.shortName}</h2>
          <p>Sector: {stockData.info.sector}</p>
          <p>Market Cap: {stockData.info.marketCap}</p>

          <StockChart data={stockData.history} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;