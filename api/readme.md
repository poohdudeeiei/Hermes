# api

## How to start

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
