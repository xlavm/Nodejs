# Send Email with Node

## Initial Configuration [Local]

1. Configure the APP GMAIL API with OAuth2

    in the file [Guia_OAuth2+Gmail.docx](./Guia_OAuth2+Gmail.docx) is the steps for configure the app gmail api with OAuth2

2. Create the `.env` file in the equal route of package.json with this:
```
PORT=3000
PATH_API_SEND_EMAIL=/api/v1/sendEmail
SERVICE = gmail
EMAIL_SENDER=myemail@gmail.com
PASS_EMAIL_SENDER=my_password_of_email
CLIENT_ID=client_id_app_google_cloud_console
CLIENT_SECRET=client_secret_app_google_cloud_console
REDIRECT_URI=https://developers.google.com/oauthplayground
REFRESH_TOKEN=refresh_token_of_oauthplayground
```

-----------------------
## Executing the API [Local]
1. Execute into the API
    ```
    npm install
    ```
2. Next, execute
    ```
    npm start
    ```
3. Open [http://localhost:3000](http://localhost:3000) in you browser.

------------------------
## Result of execution

![resultSendEmail](docs/resultsendemail.png)


------------------------
## Test the API in Postman

Import the script [test/test.postman.json](test/test.postman.json) into Postman


------------------------
## API Reference

### Send-Email
|Endpoint|Method|
|:--|:--|
|/api/v1/sendEmail/sendemail/|POST|

Sample Response
```json
{
    "accepted": [
        "angelvamart@hotmail.com"
    ],
    "rejected": [],
    "envelopeTime": 593,
    "messageTime": 720,
    "messageSize": 657,
    "response": "250 2.0.0 OK  1612740634 f26sm544531vsr.6 - gsmtp",
    "envelope": {
        "from": "angelvamart@hotmail.com",
        "to": [
            "angelvamart@hotmail.com"
        ]
    },
    "messageId": "<5cfea36a-1b35-3d54-9609-d0ab522cc77e@hotmail.com>"
}
```

