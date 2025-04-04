import mongoose from 'mongoose';
 const connectToDB =async()=>{
    try {
        await mongoose.connect('mongodb+srv://avez-taxlab:WMw2nFx5fDUQw0h4@cluster0.nwg85.mongodb.net/vat-db?retryWrites=true&w=majority&appName=Cluster0USE_MONGO_AS_CLUSTER = true')
    console.log('Connected to DB')
    } catch (error) {
        console.log('Error connecting to DB',error)
    }
};

export default connectToDB;