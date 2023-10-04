// ChatGPT
const graphify = (data, graphID, produceData) => {
  
  // X- und Y-Achsendaten extrahieren
  const xData = data.map((entry) => new Date(entry.timestamp));
  const yData = data.map((entry) => entry.value);

  const xDataProduce = produceData.map((entry) => new Date(entry.timestamp));
  const yDataProduce = produceData.map((entry) => entry.value);

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
  };

  const traceProduce = {
    x: xDataProduce,
    y: yDataProduce,
    type: "scatter", // Linien-Diagramm
  };

  // Daten-Array für Plotly erstellen
  const plotData = [trace, traceProduce];
  console.log(plotData);

  // Plotly-Graph erstellen
  Plotly.newPlot("graph" + graphID, plotData, layout);
};
