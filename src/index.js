import express from 'express'
import { port } from './config.js'
import morgan from 'morgan'
import { specs, swaggerUi } from '../swagger.js'
import usersRoutes from './routes/users.routes.js'

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(usersRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.listen(port);
console.log('Server on port', port);