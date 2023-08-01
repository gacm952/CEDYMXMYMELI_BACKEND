import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    secondName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    secondLastName: {
        type: String,
        trim: true,
    },
    typeDocument: {
        type: String,
        required: true,
        trim: true,
    },
    document: {
        type: Number,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        trim: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
        trim: true,
    },
    typeOfBlood: {
        type: String,
        required: true,
        trim: true,
    },
    civilStatus: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        trim: true,
    },
    role: {
        type: String,
        default: "User",
    },
    responsable: {
        type: Boolean,
        default: false,
    },
    token: {
        type: String,
    },
    confirmado: {
        type: Boolean,
        default: false,
    },
    registeredBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    parentName: {
        type: String,
        },
    parentSecondName: {
        type: String,
        },
    parentLastName: {
        type: String,
        },
    parentLastSecondName: {
        type: String,
        },    
    parentTypeOfDocument: {
        type: String,
        },
    parentDocument: {
        type: Number,
        },   
},
    {
        timestamps: true,
    }
);

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.passwordCheck = async function (passwordForm){
    return await bcrypt.compare(passwordForm, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;