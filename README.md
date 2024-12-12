# To do
- [ ] More standards models and controllers for the API (maybe https://github.com/datacharmer/test_db)
- [x] Add swagger to the API
- [ ] Add tests to the API (Jest?)
- [ ] Choose sqlize or prisma for the ORM
- [ ] Add analytics
- [ ] Send emails with nodemailer or sendgrid
- [ ] Return html homepage for / route
- [ ] Add a login with JWT or OAuth2 + bcrypt with salt
- [ ] Add session management
- [ ] Add login with google or github?

## Goals
- [ ] Create basic ops for payments with MercadoPago or Stripe or Paypal or any other payment gateway

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

## Docker
    docker build -t node-app .
    docker run -d --name node-app -p 3000:3000 --env-file=.env node-app
    Cuando ejecutes el contenedor, deberás tener en el directorio actual el archivo .env para que sean exportados los valores de las variables de entorno.