import express from 'express';
import cors from 'cors';
import cartRoutes from './routes/cartRoutes.js'; // Importera dina rutter

const app = express();
const PORT = 8000;

// Middleware för att hantera JSON-data
app.use(express.json());
app.use(cors());

// Använd dina rutter
app.use('/api/cart', cartRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});
