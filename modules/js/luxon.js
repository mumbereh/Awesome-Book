const displayDateTime = () => {
  const DateTime = luxon.DateTime.local().toISO();

  const displayTimeParagraph = document.querySelector('.display-time');

  displayTimeParagraph.textContent = `DateTime: ${DateTime}`;
};

displayDateTime();
