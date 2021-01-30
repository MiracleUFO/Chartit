const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        default: ''
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        default: '',
        unique: true
    },
    profilePicture: {
        type: String,
        default: 'https://image.freepik.com/free-photo/blue-orange-cactus-vase-isolated_6607-236.jpg'
    },
    password: {
        type: String,
        required: true,
        default: '',
    },
    created: {
        type: Date,
        default: Date.now
    },
    reviews: [ {type: Schema.Types.ObjectId, ref: 'Review'} ]
});

//userSchema.methods.toJSON = function() {
    //const obj = this.toObject();
    //delete obj.password;
    //return obj;
//}

module.exports = mongoose.model('User', userSchema);
