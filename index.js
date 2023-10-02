var XML;

const readXML = () => {
  fetch("sample.xml")
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
    });
};
