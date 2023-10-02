var XML;

const readXML = () => {
  fetch("sample.xml").then((res) => { // fetche
      return res.text();
    })
    .then((String) => {
      XML = new DOMParser().parseFromString(String, "text/xml"); // parse
      console.log(XML);
    });
};
