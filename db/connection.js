import mongoose from 'mongoose';
const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://avez-taxlab:avez-taxlab@cluster0.nwg85.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

        // mongodb+srv://avez-taxlab:avez-taxlab@cluster0.nwg85.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

        console.log('Connected to DB')
    } catch (error) {
        console.log('Error connecting to DB', error)
    }
};

export default connectToDB;