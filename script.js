function loadClient() {
  const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
  const spreadsheetId = "YOUR_SPREADSHEET_ID"; // Replace with your spreadsheet ID (optional)

  const url = `https://sheets.googleapis.com/v4/spreadsheets/17uxdu7E4G8v3nquImZVFu4jvaR_YB35uiocnb2yYh1k; // Build the API endpoint URL

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
