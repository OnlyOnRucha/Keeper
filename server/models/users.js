import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    title : String,
    content : String
});

const UserModel = mongoose.model('users', UserSchema); //users is the database name

export default UserModel;