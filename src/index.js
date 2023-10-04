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

/*
fs = require("fs");
let XML;


const renderAdditive = () => {
  const antwort = [
    {
        timestamp: '2019-03-13T23:00:00.000',
        valueSell: "1",
        valueBuy: "0.4"
    },
    {
        timestamp: '2019-03-14T23:00:00.000',
        valueSell: "3",
        valueBuy: "2"
    },
]

const xData = antwort.map((entry) => new Date(entry.timestamp));
let yDataSell = antwort.map((entry) => parseFloat(entry.valueSell));
let yDataBuy = antwort.map((entry) => parseFloat(entry.valueBuy));



yDataSell = yDataSell.reduce((acc, curr, index) => {
  if (index === 0) {
    return [curr];
  }
  acc.push(curr + acc[index - 1]);
  return acc;
}, []);

yDataBuy = yDataBuy.reduce((acc, curr, index) => {
  if (index === 0) {
    return [curr];
  }
  acc.push(curr + acc[index - 1]);
  return acc;
}, []);


  const sellData = 
    {
      x: xData,
      y: yDataSell,
      type: "scatter",
    };
  const buyData = 
    {
      x: xData,
      y: yDataBuy,
      type: "scatter",
    };
  var data = [sellData, buyData]
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

  Plotly.newPlot("graphzählerstand", data, layout);

};
