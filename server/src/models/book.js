import {Schema,model} from "mongoose"

const BookSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    authorID:{
        type:Schema.Types.ObjectId,
        required:true,
        ref: "Author"
    }
})

const Book = model('Book',BookSchema)

export default Book