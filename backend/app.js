import express from 'express';
import cors from 'cors'
import userRouters from './routes/user.routes.js'
import routerTask from './routes/task.routes.js';

const app = express();

app.use(express.json())
app.use(userRouters)
app.use(routerTask)
app.use(cors())


export default app