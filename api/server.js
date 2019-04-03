import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('The API endpoint is working!!!'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running or port ${PORT}`);
});
