import express, { Application } from 'express';
import mw from './config/middlewares.config';
import { routes } from './routes/routes';
const app: Application = express();
const PORT = process.env.PORT || 8000;
app.use(mw.globalMiddleware); 
app.use(routes);    
app.listen(PORT, (): void => {
    console.log(`Server Running here 👉 http://localhost:${PORT}`);
});