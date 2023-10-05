const graphify = (data, graphID) => {
  
  // X- und Y-Achsendaten extrahieren
  const xData = data.map((entry) => new Date(entry.timestamp));
  const yData = data.map((entry) => entry.valueBezug);

  //const xDataProduce = data.map((entry) => new Date(entry.timestamp));
  const yDataProduce = data.map((entry) => entry.valueEinspesung);

  let selectorOptions = {
    buttons: [{
        step: 'month',
        stepmode: 'backward',
        count: 1,
        label: '1m'
    }, {
        step: 'month',
        stepmode: 'backward',
        count: 6,
        label: '6m'
    }, {
        step: 'year',
        stepmode: 'todate',
        count: 1,
        label: 'YTD'
    }, {
        step: 'year',
        stepmode: 'backward',
        count: 1,
        label: '1y'
    }, {
        step: 'all',
    }],
  };

  // Layout-Einstellungen für den Graphen
  const layout = {
    xaxis: {
      type: "date", // X-Achse als Zeitachse
      title: "Zeit",
      rangeselector: selectorOptions,
      rangeslider: {}, // Range-Slider unter dem Graphen
    },
    yaxis: {
      title: "Volumes",
    },
    colorway: ["blue", "orange"],
  };

  // Trace für die Daten erstellen
  const trace = {
    x: xData,
    y: yData,
    type: "scatter", // Linien-Diagramm
    name: "Produktion",
  };

  const traceProduce = {
    x: xData,
    y: yDataProduce,
    type: "scatter", // Linien-Diagramm
    name: "Verbrauch",
  };

  // Daten-Array für Plotly erstellen
  const plotData = [traceProduce, trace];
  console.log(plotData);

  // Plotly-Graph erstellen
  Plotly.newPlot("graph"+graphID, plotData, layout, {displayModeBar: false});
};
