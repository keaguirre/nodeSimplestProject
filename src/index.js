import express from 'express'
import { PORT } from './config'
import usersRoutes from './routes/users.routes'

const app = express()
app.use(usersRoutes);

app.listen(PORT);
console.log('Server on port', PORT);

