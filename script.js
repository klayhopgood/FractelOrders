function loadClient() {
  const apiKey = "AIzaSyDuEn3Mw1oaAEKISiiUUNZmC1X3UvYPF5k"; // Replace with your actual API key
  const spreadsheetId = "17uxdu7E4G8v3nquImZVFu4jvaR_YB35uiocnb2yYh1k"; // Replace with your spreadsheet ID

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}`; // Build the API endpoint URL

  fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`, // Authorization header with your API key
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log("Fetched data from Google Sheets API:", data);
      // Process the fetched data here (e.g., display it in your HTML)
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}
