const graphify = (data, graphID) => {
  
  // X- und Y-Achsendaten extrahieren
  const xData = data.map((entry) => new Date(entry.timestamp));
  const yData = data.map((entry) => entry.valueBezug);

  //const xDataProduce = data.map((entry) => new Date(entry.timestamp));
  const yDataProduce = data.map((entry) => entry.valueEinspesung);

  // Layout-Einstellungen für den Graphen
  const layout = {
    xaxis: {
      type: "date", // X-Achse als Zeitachse
      title: "Zeit",
      rangeslider: {}, // Range-Slider unter dem Graphen
    },
    yaxis: {
      title: "Volumes",
    },
  };

  // Trace für die Daten erstellen
  const trace = {
    x: xData,
    y: yData,
    type: "scatter", // Linien-Diagramm
    name: "Verbrauch",
  };

  const traceProduce = {
    x: xData,
    y: yDataProduce,
    type: "scatter", // Linien-Diagramm
    name: "Produktion",
  };

  // Daten-Array für Plotly erstellen
  const plotData = [trace, traceProduce];
  console.log(plotData);

  // Plotly-Graph erstellen
  Plotly.newPlot("graph"+graphID, plotData, layout);
};
