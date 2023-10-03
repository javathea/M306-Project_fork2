let XML;

//const readXML = async () => {
//  await fetch("http://localhost:3000/sdat", {method: "GET"})
    /*.then((res) => {
      res.text();
    })*/
//    .then((res) => {
//      console.log(res);
      /*XML = new DOMParser().parseFromString(String, "text/xml");
      convertToCSV(XML);
      const additiveData = convertToAdditiveData(XML);
      const data = convertToData(XML);*/
      //graphify(res, "sdat");
      //graphify(additiveData, "additiveSdat");
//    })
/*    .catch((err) => {
      console.log(err);
    });
};
*/

function readXML(){
  try {
    const response = fetch('http://127.0.0.1:5000/sdat', {method: "GET"});  // Fetching data from the /sdat route
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = response.json();  // Parsing the response as JSON
    console.log('Received data:', data);  // Do something with the received data
  } catch (error) {
    console.error('Error:', error);
  }
}
