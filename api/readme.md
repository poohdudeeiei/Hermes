# api

## How to start server

### On Local Computer

1. install dependencies

```bash
npm install
```

1. start server

```bash
# for dev [live change by nodemon]
npm run dev

# for production
npm start
```

### On Docker just for live server

1. start container

```bash
docker-compose up
```

If you change or install new npm packages or change docker file you can run `docker-compose up -d --no-deps --build <service name | let it empty>` to rebuild docker



## APIs design

### Authentication

- `POST` /account/register

```JSON
// send body Content-Type: application/json
{
    "id":"anirut",
    "displayName":"Pandora",
    "password":"1234",
    "avatar":"string-b64url"
}
```

- `GET` /account/token?id=anirut&password=1234&action=exange

```javascript
// params
 - id
 - password
 - action [login | refresh]

// resources
/**
 * @typedef {Object} Token
 * @property {string} tokenType
 * @property {string} acessToken
 * @property {string} refreshToken
 * @property {number} expirein
 */

```

### Profiles

- `GET` /profile/:id

```JSON
{
    "username": "string",
    "avatar": "string-b64url",
    "displayName": "string"
}
```

### Chat

- `GET` /chat/contacts

```JSON
// Attach Header Authorization: Bearer [jwt]
// Response
[
    {
        "type":"group|private",
        "chatID":"string",
        "chatName":"string",
        "image":"string-b64url",
        "colour":"string(rgba)",
        "lastMassage":"string"
    }
]
```

- `WS` /chat/:id

```Javascript
// Attach Header Authorization: Bearer [jwt]

On message:send
// Get sended message from client
data = {
    chatId:"string",
    chatContent:{}
}

Emit message
// Boadcast message to dest client
data={
    chatId:"string",
    sender:"string",
    timestamp:Date.now(),
    chatContent:{}
}
```


