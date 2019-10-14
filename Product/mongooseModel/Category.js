var schema = new Schema({
    name:String,
    taste:String,
    sugarFree:Boolean,
    TypeOfBiscuits:String

})
export default mongoose.model("Category", schema)