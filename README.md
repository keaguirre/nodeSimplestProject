# NodeJS PostgreSQL API
    npm init -y
    mkdir src
    npm i express morgan pg
    "type":"module", en package.json para dejar de usar commonjs y usar enmascript
    "scripts": {
        "start": "node src/index.js",
        "dev": "node --env-file=.env --watch src/index.js"
    },

## creds para .env
    PGHOST=''
    PGDATABASE=''
    PGUSER=''
    PGPASSWORD=''
    DBPORT='5432'