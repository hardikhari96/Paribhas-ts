import express, { Application } from 'express';
import { routes } from './routes/routes';
import {globalMiddleware} from './middlewares/middlewares';
const app: Application = express();
const PORT = process.env.PORT || 8000;
app.use(globalMiddleware); 
app.use(routes);
app.listen(PORT, (): void => {
    console.log(`Server Running here 👉 http://localhost:${PORT}`);
});
