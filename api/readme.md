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

- `GET` /profile

```JSONC
// Attach Header Authorization: Bearer [jwt]
{
    "userid": "string",
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

<details>

  <summary>Example html and js client code</summary>

```html
<body>
    <script src="https://cdn.socket.io/3.1.3/socket.io.min.js"
        integrity="sha384-cPwlPLvBTa3sKAgddT6krw0cJat7egBga3DJepJyrLl4Q9/5WLra3rrnMcyTyOnh"
        crossorigin="anonymous"></script>

    <input type="text" id="namespace" placeholder="namespace" value="chat">
    <input type="text" id="token" placeholder="token" value="Bearer auth_token">
    <button id="connectbtn" onclick="connectSocket(token.value)">connectSocket</button>
    <input type="text" id="chatid" placeholder="chatid" value="6501f75c0af993316f6f2e30">
    <hr>

    <div id="chat">
        <button onclick="addMessageBlog({msg:'anirut'})" hidden>add</button>
    </div>
    <input type="text" id="message" placeholder="Enter your message">
    <button onclick="sendMessage({chatId:chatid.value,chatContent:message.value})">send</button>

</body>

<script>
    var socket;

    const connectSocket = token => {
        socket = io(`ws://localhost:3000/${namespace.value}`, {
            auth: (cb) => {
                cb({
                    token: token
                });
            }
        });
        socket.on("message",resiveMsg);
    };

    function resiveMsg(msg){
        addMessageBlog(msg);
    }

    function addMessageBlog(context){
        const msg = document.createElement("p");
        msg.innerHTML = JSON.stringify(context);
        chat.appendChild(msg);
    }

    function sendMessage(context){
        if(!socket) connectbtn.click();
        socket.emit("message:send",context);
    }
</script>

```

</details>
