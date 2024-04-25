import mongoose from 'mongoose';

const SignUpSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
});

const SignUpModel = mongoose.model('sign', SignUpSchema);

export default SignUpModel;