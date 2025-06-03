import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectToDB from './db/connection.js';
import { categoryRouter } from './routes/category.js';
import { cardRouter } from './routes/card.js';
import authRouter from './routes/auth.js';
import { blogRouter } from './routes/blog.js';

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb" })); // Increase JSON body size limit
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); // Increase URL-encoded body size limit

// Routes
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/card', cardRouter);
app.use('/api/v1/users', authRouter);
app.use('/api/v1/blog', blogRouter);

// Connect to database
connectToDB();

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
