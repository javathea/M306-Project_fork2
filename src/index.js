let XML;

const readXML = () => {
  fetch("http://localhost:3001/xml")
    .then((res) => {
      return res.json();
      //graphify(res, "sdat");
    })
    .then((data) => {
      console.log(data);
      graphify(data, "sdat");
      hideLoader();
    })
    .catch((err) => {
      console.log(err);
    });
};

function exportCSV(){
  let graph = document.getElementById("graphsdat");
  let csvData = "DateTime,VolumeVerbrauch,VolumeHerstellung\n";
  console.log(graph.data);
}

function showLoader() {
  let x = document.getElementById("loader");
  if (x.style.display == "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function hideLoader() {
  let x = document.getElementById("loader");
  if (x.style.display == "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}


const renderAdditive = () => {
  fetch("http://localhost:3001/esl").then((res) => {
    return res.text();
  }).then((data) => {
    return JSON.parse(data);
  }).then((antwort) => {
    console.log(antwort)
    graphifyESL(antwort);

  })
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

  console.log(antwort)
};
