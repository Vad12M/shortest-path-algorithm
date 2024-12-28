import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

// CORS
app.use(cors());
app.use(cors({
    origin: 'http://localhost:3001',
}));

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
