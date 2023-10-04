let XML;

const readXML = () => {
  fetch("http://localhost:3001/xml")
    .then((res) => {
      return res.json();
      //graphify(res, "sdat");
    })
    .then((data) => {
      console.log(data);
      graphify(data, "verbrauch");
    })
    .catch((err) => {
      console.log(err);
    });
};

const renderAdditive = () => {
  const initialData = [
    {
      x: [],
      y: [],
      type: "scatter",
    },
  ];

  const layout = {
    title: "Dynamisch aktualisierte Daten",
    xaxis: {
      type: "date", // X-Achse als Zeitachse
      title: "Zeit",
      rangeslider: {}, // Range-Slider unter dem Graphen
    },
    yaxis: {
      title: "Volumes",
    },
  };

  Plotly.newPlot("zählerständegraph", initialData, layout);
  // graphify(null, "verbrauch");
  const source = new EventSource("http://localhost:3001/additiveIncome");

  let daten = [];

  source.onmessage = function (event) {
    const neuesObjekt = JSON.parse(event.data);
    console.log("retrieved Object", neuesObjekt);
    daten.push(neuesObjekt);
    console.log("pushing daten", daten);

    // Rufen Sie hier Ihre Plotly-Update-Funktion auf
    updateGraph(neuesObjekt);
  };

  source.onerror = function (event) {
    source.close();
    if (source.readyState === EventSource.CLOSED) {
      console.log("Verbindung wurde geschlossen.");
    } else {
      console.log("Ein Fehler ist aufgetreten.", event);
    }
  };

  function updateGraph(newData) {
    const dataToUpdate = [{
      x: newData.map(point => point.timestamp),
      y: newData.map(point => point.value),
      type: 'scatter'
    }];
    console.log("updating graph...", newData)
    const ini =  JSON.parse(JSON.stringify(newData));
    console.log('ini', ini)
    const x = [];
const y = [];
    const test = ini.forEach(item => {
      x.push(item.timestamp);
      y.push(item.value);
    });
    const transformedArray = [{ x, y }];
    console.log("updated graph...", transformedArray)
    Plotly.react("zählerständegraph", transformedArray, layout);
  }  
};
