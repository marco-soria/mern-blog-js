import express from 'express';

const app = express();

app.listen(27017, () => {
    console.log('Server is running');
      }
  );


//   const port = process.env.PORT || 5100;

//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     app.listen(port, () => {
//       console.log(`server running on PORT ${port}...`);
//     });
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }