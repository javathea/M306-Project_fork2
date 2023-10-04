// ChatGPT
const graphify = (data, graphID) => {
  if (!data) {
    data = [
      {
        x: [],
        y: [],
        type: "scatter",
      },
    ];
  }
  
  // X- und Y-Achsendaten extrahieren
  const xData = data.map((entry) => new Date(entry.timestamp));
  const yData = data.map((entry) => entry.value);

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

  // Daten-Array für Plotly erstellen
  const plotData = [trace];

  // Plotly-Graph erstellen
  Plotly.newPlot(graphID + "graph", plotData, layout);
};
