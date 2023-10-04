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
const yDataSell = antwort.map((entry) => entry.valueSell);
const yDataBuy = antwort.map((entry) => entry.valueBuy);

  const sellData = 
    {
      x: xData,
      y: yDataSell,
      type: "scatter",
    }
  ;
  const buyData = 
    {
      x: xData,
      y: yDataBuy,
      type: "scatter",
    }
  ;
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
