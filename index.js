var XML;

const readXML = () => {
  fetch("sample.xml")
    .then((res) => {
      return res.text();
    })
    .then((String) => {
      XML = new DOMParser().parseFromString(String, "text/xml");
      convertToCSV(XML);

      graphify(XML);
    });
};
