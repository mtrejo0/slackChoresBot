// Global Variables
var SPREADSHEET_ID = "XXX"; // Update this with your Spreadsheet ID
var RANGE = "A1:D27"; // Update this with your desired range
var SLACK_WEBHOOK_URL = "https://hooks.slack.com/services/XXX/XXX/XXX"; // Your Slack Webhook URL

function readSheetAndSendToSlack() {
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
  var data = sheet.getRange(RANGE).getValues();
  

  console.log(data);
  var rows = data.slice(1); // Exclude header row
  var msg = "";

  // Filter and format rows for message
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    if (row[3] == '') { // Assuming you want to filter out rows similar to your Python condition
      var line = "";
      if (row[2] == "") {
        var chore = row[0];
        var name = row[1];
        line = chore + " - " + name;
      } else {
        var chore = row[0];
        var name = row[1];
        var id = row[2];
        line = chore + " - <@" + id + ">";
      }
      console.log(msg);
      console.log(line);
      msg += line + "\n";
    }
  }
  console.log(msg);
  if (msg !== "") {
    sendSlackMsg(msg);
  }
}

function sendSlackMsg(message) {
  var payload = JSON.stringify({
    "text": message,
    "channel": "#chores", // Update this if you have a specific channel in mind
  });

  var options = {
    "method": "post",
    "contentType": "application/json",
    "payload": payload,
    "muteHttpExceptions": true // Useful for debugging
  };

  var response = UrlFetchApp.fetch(SLACK_WEBHOOK_URL, options);
  if (response.getResponseCode() == 200) {
    Logger.log("Message sent successfully!");
  } else {
    Logger.log("Failed to send message. Status code: " + response.getResponseCode() + ", Response: " + response.getContentText());
  }
}
