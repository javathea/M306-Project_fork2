// ChatGPT
const graphify = (XML) => {
    let data = [];
    const observations = XML.querySelectorAll("Volume");
    const startDateTime = XML.querySelector("StartDateTime").textContent;
  
    observations.forEach((observation, index) => {
      const sequence = observation.parentElement.querySelector("Sequence").textContent;
      const volume = observation.textContent;
      const dateTime = new Date(startDateTime);
      dateTime.setMinutes(dateTime.getMinutes() + (parseInt(sequence) - 1) * 15);
  
      const formattedDateTime = dateTime.toISOString().replace("Z", "");
      data.push({ timestamp: formattedDateTime, value: volume });
    });
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
    Plotly.newPlot("graph", plotData, layout);
  };
  