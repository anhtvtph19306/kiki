import mongoose from 'mongoose';
const sizeSchema = mongoose.Schema({
    name: String
},
    {
        timestamps: true
    })
export default mongoose.model('Size', sizeSchema)