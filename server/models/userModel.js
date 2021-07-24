import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required'],
        minlength: [2, 'Name can\'t be smaller than 2 characters'],
        maxlength: [64, 'Name can\'t be greater than 64 characters']
    },
    email:{
        type: String,
        lowercase: true,
        required: [true, 'Email is required'],
        maxlength: [128, 'Email can\'t be greater than 128 characters'],
        match: /.+\@.+\..+/,
        unique: true,
    },
    phone:{
        type: Number,
        required: [true, 'Phone is required'],
        maxlength: [12, 'Phone can\'t be greater than 12 characters'],
    },
    city:{
        type: String,
        required: [true, 'city is required'],
    },
    state:{
        type: String,
        required: [true, 'state is required'],
    },
    country:{
        type: String,
        required: [true, 'Country is required'],
    },
    area:{
        type: String,
        required: [true, 'Area is required'],
    },
    createdAt:{
        type:Date,
        default:new Date()
    } 
});


const userDetails = mongoose.model('userDetails',userSchema);
export default userDetails; 