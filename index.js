import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js'

const app = express();
const port = 4000;
app.use(bodyParser.json())

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('HELLO FROM HOMEPAGE');
})

// app.get('/', (req, res));

app.listen(port, () => console.log(`server running on port : http://localhost:${port}`))
