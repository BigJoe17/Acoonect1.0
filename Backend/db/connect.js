import mongoose from 'mongoose';

const connect = async () => {
    mongoose.connect(process.env.MONGO_URI, { })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('Error: ', err));
  
  }



export default connect;