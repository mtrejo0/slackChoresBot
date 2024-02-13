// Global Variables
var SPREADSHEET_ID = "XXX";
var SLACK_WEBHOOK_URL = "https://hooks.slack.com/services/XXX/XXX/XXX";
var SLACK_CHANNEL = "#chores";

/**
 * Reads tasks from the spreadsheet and sends a formatted message to a Slack channel.
 */
function readSheetAndSendToSlack() {
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
  var lastRow = Math.min(sheet.getLastRow(), 100); // Ensures no more than 100 rows are considered
  var data = sheet.getRange("A1:D" + lastRow).getValues();

  var message = data.slice(1) // Excludes header row
    .filter(row => row[0] !== "") // Excludes rows where the first column is empty
    .reduce((acc, [chore, name, id, status]) => {
      if (status === '') { // Includes only tasks with an empty status
        acc += id ? `${chore} - <@${id}>` : `${chore} - ${name}`;
        acc += "\n"; // Adds a new line for each task
      }
      return acc;
    }, "");

  if (message) {
    sendSlackMsg(message);
  }
}

/**
 * Sends a message to a specified Slack channel.
 * @param {string} message The message to be sent.
 */
function sendSlackMsg(message) {

  message = "Chores left to be done:\n"+message
  var payload = JSON.stringify({ text: message, channel: SLACK_CHANNEL });
  var options = {
    method: "post",
    contentType: "application/json",
    payload: payload,
    muteHttpExceptions: true
  };

  var response = UrlFetchApp.fetch(SLACK_WEBHOOK_URL, options);
  Logger.log(response.getResponseCode() == 200 ? "Message sent successfully!" : "Failed to send message.");
}
