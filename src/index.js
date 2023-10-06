let XML;

const readXML = () => {
  fetch("http://localhost:6969/xml")
    .then((res) => {
      return res.json();
      //graphify(res, "sdat");
    })
    .then((data) => {
      console.log(data);
      graphify(data, "sdat");
      hideLoaderv();
    })
    .catch((err) => {
      console.log(err);
    });
};


function saveAs(array, filename = "data.json") {
  // 1. Convert array to JSON-formatted string
  const jsonString = JSON.stringify(array, null, 2);

  // 2. Create a blob from the JSON string
  const blob = new Blob([jsonString], { type: "application/json" });

  // 3. Create an Object URL for the blob
  const url = URL.createObjectURL(blob);

  // 4. Create a temporary anchor element
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;

  // Append the anchor to the document, this is necessary for Firefox
  document.body.appendChild(a);

  // 5. Simulate a click to start the download
  a.click();

  // Clean up: remove the anchor from the document and revoke the Object URL
  document.body.removeChild(a);
  // 6. Revoke the Object URL
  URL.revokeObjectURL(url);
}

const exportJSON = () => {
  try {
    const esl = document.getElementById("graphzählerstand");

    let data742 = prepareCSV(esl, "742");
    let data735 = prepareCSV(esl, "735");
    const json = convertJSON(data742, data735);
    saveAs(json, "data.json");

  } catch (err) {
    showError(
      "Der Export kann nur mit einem dargestellten Zählerstand-Graphen durchgeführt werden."
    );
  }
};

function loopCSV(arrData, id, csvContent) {
  arrData.forEach((row) => {
    let dateObject = new Date(row.timestamp);
    // Unix-Timestamp erhalten (in Millisekunden)
    const unixTimestampMilliseconds = dateObject.getTime();

    // Unix-Timestamp in Sekunden umwandeln (durch 1000 teilen)
    const unixTimestampSeconds = Math.floor(unixTimestampMilliseconds / 1000);
    if (id == "742") {
      csvContent += `${unixTimestampSeconds},${row.valueBezug}\n`;
    } else if (id == "735") {
      csvContent += `${unixTimestampSeconds},${row.valueEinspesung}\n`;
    }
  });
  return csvContent;
}

function prepareCSV(graph, id) {
  const data = graph.data[0].x.map((timestamp, index) => {
    if (id == "742") {
      return {
        timestamp: timestamp,
        valueBezug: graph.data[0].y[index],
      };
    } else if (id == "735") {
      return {
        timestamp: timestamp,
        valueEinspesung: graph.data[1].y[index],
      };
    }
  });
  return data;
}

function downloadCSV(id, csvContent) {
  // CSV-Datei zum Download anbieten
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `Sensor_${id}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportCSV() {
  try {
    const esl = document.getElementById("graphzählerstand");

    console.log(esl.data);

    // CSV-Format erstellen
    let csvContent = "timestamp,value\n";

    let data742 = prepareCSV(esl, "742");
    console.log(data742);
    let csv742 = loopCSV(data742, "742", csvContent);
    downloadCSV("742", csv742);

    let data735 = prepareCSV(esl, "735");
    let csv735 = loopCSV(data735, "735", csvContent);
    downloadCSV("735", csv735);
  } catch (err) {
    showError(
      "Der Export kann nur mit einem dargestellten Zählerstand-Graphen durchgeführt werden."
    );
  }
}

function showError(errorMessage) {
  const errorElement = document.getElementById("error");
  errorElement.innerText = errorMessage;
  errorElement.classList.remove("hidden-error");

  // Verberge das Element nach 3 Sekunden
  setTimeout(() => {
    errorElement.classList.add("hidden-error");
    errorElement.innerText = ""; // Zurücksetzen des Texts
  }, 3000);
}

function showLoaderz() {
  let x = document.getElementById("loaderz");
  if (x.style.display == "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function showLoaderv() {
  let x = document.getElementById("loaderv");
  if (x.style.display == "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function hideLoaderz() {
  let x = document.getElementById("loaderz");
  if (x.style.display == "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function hideLoaderv() {
  let x = document.getElementById("loaderv");
  if (x.style.display == "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

const renderAdditive = () => {
  fetch("http://localhost:6969/esl")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      return JSON.parse(data);
    })
    .then((antwort) => {
      console.log(antwort);
      graphifyESL(antwort);
      hideLoaderz();
    });
  const antwort = [
    {
      timestamp: "2019-03-13T23:00:00.000",
      valueSell: "1",
      valueBuy: "0.4",
    },
    {
      timestamp: "2019-03-14T23:00:00.000",
      valueSell: "3",
      valueBuy: "2",
    },
  ];

  console.log(antwort);
};
