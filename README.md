# StockLink

## About
StockLink is a Google Sheets add-on that connects your spreadsheet with your TD Ameritrade account.
It uses the official TD Ameritrade API at https://developer.tdameritrade.com/.

## Installation
Visit https://stocklink.speran.com for installation instructions.

## Examples
```
=TDACCOUNT(123456, "accountValue")
```

```
=TDACCOUNT(123456, "moneyMarketFund")
```

```
=TDPOSITION(123456, "SPY", "averagePrice")
```

```
=TDPOSITION(123456, "SPY", "longQuantity")
```

```
=TDPOSITION(123456, "SPY", "marketValue")
```

```
=TDQUOTE("SPY", "mark")
```

```
=TDQUOTE("SPY", "mark", "2018-01-01")
```

&copy; 2019 Speran LLC
