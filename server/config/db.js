const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.MONGO_CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true});
    const connection=mongoose.connection;

    try {
        connection.once('open',()=>{
            console.log('Database connected');
        })
    } catch (error) {
        console.error(error);
    }
}
module.exports=connectDB;