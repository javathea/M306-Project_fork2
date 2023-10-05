function graphifyESL(antwort) {
  const xData = antwort.map((entry) => new Date(entry.timestamp));
  let yDataBezug = antwort.map((entry) => parseFloat(entry.valueBezug));
  let yDataEinspesung = antwort.map((entry) => parseFloat(entry.valueEinspesung));

 

  const sellData = {
    x: xData,
    y: yDataBezug,
    type: "scatter",
    name: "Bezug von Strom",
  };
  const buyData = {
    x: xData,
    y: yDataEinspesung,
    type: "scatter",
    name: "Einspesung von Strom",
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

