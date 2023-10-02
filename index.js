
var XML;

const readXML = () => {
  fetch("sample.xml").then((res) => {
      return res.text();
    })
    .then((String) => {
      XML = new DOMParser().parseFromString(String, "text/xml");
      console.log(XML);

      const observations = XML.querySelectorAll("Volume");
      const startDateTime = XML.querySelector("StartDateTime").textContent;
      convertToCSV(observations, startDateTime);
    });
};
