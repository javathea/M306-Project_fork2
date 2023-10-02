// ChatGPT
const convertToCSV = (observations, startTime) => {
  
  // CSV-Header erstellen
  let csvData = "DateTime,Volume\n";

  observations.forEach((observation, index) => {
    const sequence = observation.parentElement.querySelector("Sequence").textContent;
    const volume = observation.textContent;
    const dateTime = new Date(startTime);
    dateTime.setMinutes(dateTime.getMinutes() + (parseInt(sequence) - 1) * 15);

    const formattedDateTime = dateTime.toISOString().replace("T", "").replace("Z", "");
    csvData += `${formattedDateTime},${volume}\n`;

    console.log(csvData);
  });
}