<!DOCTYPE html>
<html>
<head>
  <title>Test</title>
  <script src="https://apis.google.com/js/api.js"></script>  <script>
    function loadClient() {
      gapi.load('client', function() {  // Load the client library within gapi.load
        gapi.client.init({
          apiKey: 'AIzaSyDuEn3Mw1oaAEKISiiUUNZmC1X3UvYPF5k',
          discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
        }).then(function() {
          console.log("Loaded Google Sheets API");
        });
      });
    }
  </script>
</head>
<body>
  <script>
    loadClient();  </script>
</body>
</html>
