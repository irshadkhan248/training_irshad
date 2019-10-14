var schema = new Schema({
    teacherName: String,
    designation: String,
    department:String,
    salary:Number,
    email: String
})
export default mongoose.model("Teacher", schema)
