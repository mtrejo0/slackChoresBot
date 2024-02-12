How to make it work

- Copy [this spreadsheet](https://docs.google.com/spreadsheets/d/10rTC5Eh4-PMLbYF_vCa-Jl1448kEBwDVz0rkJqPRKAM/edit?usp=sharing) into your organizations drive
    - Its a list of chores and who is assigned and if they did it
- Make slack app for your workspace
    - https://api.slack.com/start/quickstart
- Then invite the app to the workspace
    ![Screen Shot 2024-01-07 at 1.27.51 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d7d3d22d-4648-434d-9533-e0c7c117cca0/dbfbdc50-944a-4435-beee-c67ab3a20a78/Screen_Shot_2024-01-07_at_1.27.51_PM.png)
    
- Make a Webhook it should look like this:
    - `https://hooks.slack.com/services/xxx/xxx/xxx`
- Then go to sheets > extensions > apps scripts
    - Paste in the code below with the desired
        - SPREADSHEET_ID from spresheet url
        - RANGE its 27 rn bc theres 27 brothers with me as a test but this can change props if you can modify this so that this is better
        - SLACK_WEBHOOK_URL from above
        - channel name - make a chores channel or use the one you already use
- Press run to see if it works
- Then make a trigger - the alarm icon
    - Trigger it every day or once a week or whatever you want
- The ID column is the member id on slack for this person
    - If the id is present it will actually @ the person
    - So go to the slack profile click the dots and copy member id for each person on the list
