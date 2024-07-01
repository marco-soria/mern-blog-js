import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5100;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });


app.use(express.json());

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
      }
  );


//   const port = process.env.PORT || 5100;
