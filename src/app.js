import express from "express";
import TaskRoute from './routes/task.route.js'

const app = express();

app.use('/api', TaskRoute)

export default app;
