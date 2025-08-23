import pytest
import yfinance as yf

def test_yf_ticker():
    # Test with a valid ticker
    ticker = "AAPL"
    stock = yf.Ticker(ticker)
    assert stock is not None
    assert "AAPL" in stock.info.get("symbol", ""), "Ticker symbol mismatch"

def test_yahoo():
    ticker = yf.Ticker("META")
    print(ticker)
    print("sharesOutstanding: " + str(ticker.info.get("sharesOutstanding", 0)))
    print("previousClose: " + str(ticker.info.get("previousClose", 0)))

def test_cashflow_info():
    ticker = yf.Ticker("META")
    print(ticker.cashflow)

def test_dividends_info():
    ticker = yf.Ticker("VZ")
    print(ticker.dividends)

def test_ticker_valid_symbol():
    """Check that we can fetch basic info for a valid stock ticker."""
    ticker = "AAPL"
    stock = yf.Ticker(ticker)

    # stock.info is sometimes empty for certain tickers
    info = stock.info
    assert isinstance(info, dict)
    assert "symbol" in info and info["symbol"].upper() == ticker