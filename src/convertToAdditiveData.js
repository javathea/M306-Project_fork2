const convertToAdditiveData = (XML) => {
  let data = [];
  const observations = XML.querySelectorAll("Volume");
  const startDateTime = XML.querySelector("StartDateTime").textContent;

  let cumulativeValue = 0; // Initialize a variable to keep track of the cumulative value

  observations.forEach((observation, index) => {
    const sequence = observation.parentElement.querySelector("Sequence").textContent;
    const volume = parseFloat(observation.textContent); // Parse volume as float

    cumulativeValue += volume; // Add current volume to cumulative value

    const dateTime = new Date(startDateTime);
    dateTime.setMinutes(dateTime.getMinutes() + (parseInt(sequence) - 1) * 15);

    const formattedDateTime = dateTime.toISOString().replace("Z", "");

    data.push({ timestamp: formattedDateTime, value: cumulativeValue });
  });

  console.log(data);
  return data;
};
