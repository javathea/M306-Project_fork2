let XML;

const readXML = () => {
  fetch("http://localhost:3001/xml")
    .then((res) => {
      return res.json();
      //graphify(res, "sdat");
    })
    .then((data) => {
      console.log(data);
      graphify(data[0], "sdat", data[1]);
    })
    .catch((err) => {
      console.log(err);
    });
    //.then((String) => {
      /*XML = new DOMParser().parseFromString(String, "text/xml");
      const additiveData = convertToAdditiveData(XML);
      const data = convertToData(XML);*/
    //  graphify(data, "sdat");
     // graphify(additiveData, "additiveSdat");
    //});
};

function showLoader() {
  let x = document.getElementById("loader");
  if (x.style.display == "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

/*
fs = require("fs");
let XML;

const readXML = () => {
  fs.readdir("./SDAT-Files", (err, files) => {
  
    if(err) throw err;

    files.forEach(file => {
      fetch(file)
      .then((res) => {
      return res.text();
    })
    .then((String) => {
      XML = new DOMParser().parseFromString(String, "text/xml");
      convertToCSV(XML);
      const additiveData = convertToAdditiveData(XML);
      const data = convertToData(XML);
      graphify(data, "sdat");
      graphify(additiveData, "additiveSdat");
    })
    })
  }
)};

*/