import express from "express";
import TaskRoute from './routes/task.route.js'
import authRoutes from './routes/user.AuthRoutes.js'
import ListRoute from './routes/list.route.js';

const app = express();

app.use(express.json())

app.use('/api', TaskRoute)
app.use('/api', authRoutes)
app.use('/api', ListRoute)

export default app;
