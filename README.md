How to make it work

- Copy [this spreadsheet](https://docs.google.com/spreadsheets/d/10rTC5Eh4-PMLbYF_vCa-Jl1448kEBwDVz0rkJqPRKAM/edit?usp=sharing) into your organizations drive
    - Its a list of chores, who is assigned, completed, and slack_id
    - And a list of members to slack_ids for custom mentions
- Make slack app for your workspace
    - https://api.slack.com/start/quickstart
- Then invite the app to the workspace
- Make a Webhook
    -  https://api.slack.com/apps/YOUR_APP/incoming-webhooks
    -  It should look like this:
    - `https://hooks.slack.com/services/xxx/xxx/xxx`
- Then go to google sheets > extensions > apps scripts
    - Paste in the code below with the desired
        - SPREADSHEET_ID from spresheet url
        - SLACK_WEBHOOK_URL from above
        - channel name - make a chores channel or use the one you already use
- Press run to see if it works
- Then make a trigger - the alarm icon
    - Trigger it every day or once a week or whatever you want
- The ID column is the member id on slack for this person
    - If the id is present it will actually @ the person
    - So go to the slack profile click the dots and copy member id for each person on the list


The output is this message:

![IMG_5312](https://github.com/mtrejo0/slackChoresBot/assets/43509746/19e44791-f967-405a-989b-0c1405b160b8)
