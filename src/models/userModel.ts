import mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: Number,
});

export const UserModel = mongoose.model('User', UserSchema); 