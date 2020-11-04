import {Schema,model} from "mongoose"

const AuthorSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    books:[{type:Schema.Types.ObjectId,ref:"Book"}]
})

const Author = model('Author',AuthorSchema)

export default Author