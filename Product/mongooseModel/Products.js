
var schema = new Schema({
    name:String,
    price:Number,
    manufacturer:{manufacturerName:String,Address:String,customerCareContact:Number},
    manufactureDate:Date,
    expireDate:Date,
    nutritionFact:[],
    ingredients:String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
})
export default mongoose.model("products", schema)