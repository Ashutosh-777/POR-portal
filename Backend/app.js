// import { superadmin } from './routes/adminRouter.js';
import express from 'express';
import { connect } from 'mongoose';
// import { json } from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import requestRoutes from './routes/requestRoutes.js';
// import { join } from 'path';
const app = express();
const port = 3002;
import { admin,adminRouter } from './routes/adminRouter.js';

// superadmin();

connect('mongodb+srv://auth-admin:AdHDOvAtNy8He2l3@cluster0.s875rof.mongodb.net/StudentsPortal');

app.use(cors());
app.use(express.json());

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ...

app.use('/uploads', express.static(join(__dirname, 'uploads')));



app.use(admin.options.rootPath, adminRouter)
app.use('/api/users', userRoutes);
// app.use('/uploads', express.static(join(__dirname, 'uploads')));
app.use('/api/request', requestRoutes); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
