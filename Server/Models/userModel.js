import mongoose from "mongoose";
const UserModel = mongoose.schema({
    name: {
        type: string,
        required: true
    },
    email: {
        type: string,
        required: true
    },
    password: {
        type: password,
        required: true
    }

})
UserModel.index({ email: 1 }, { unique: true })
const usersModel = mongoose.model("Users", UserModel)
export default usersModel