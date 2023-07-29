import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import helmet from 'helmet';

const app = express();


app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
