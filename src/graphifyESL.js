function graphifyESL(antwort) {
  const xData = antwort.map((entry) => new Date(entry.timestamp));
  let yDataSell = antwort.map((entry) => parseFloat(entry.valueSell));
  let yDataBuy = antwort.map((entry) => parseFloat(entry.valueBuy));

 

  const sellData = {
    x: xData,
    y: yDataSell,
    type: "scatter",
    name: "Verkauf von Strom",
  };
  const buyData = {
    x: xData,
    y: yDataBuy,
    type: "scatter",
    name: "Einkauf von Strom",
  };
  var data = [sellData, buyData];
  const layout = {
    title: "Dynamisch aktualisierte Daten",
    xaxis: {
      type: "date",
      title: "Zeit",
      rangeslider: {}, // Range-Slider unter dem Graphen
    },
    yaxis: {
      title: "Volumes",
    },
  };

  Plotly.newPlot("graphzählerstand", data, layout);
}

