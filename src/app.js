import express from "express";
import TaskRoute from './routes/task.route.js'
import authRoutes from './routes/user.AuthRoutes.js'

const app = express();

app.use(express.json())

app.use('/api', TaskRoute)
app.use('/api', authRoutes)


export default app;
