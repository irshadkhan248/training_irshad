/* eslint-disable quotes */

var schema = new Schema({
    // name: {
    //     type: String,
    //     required: true
    // },
    name: String,
    // price: {
    //     type: Number,
    //     min: [1, "price  cannot be 0 or negative "],
    //     max: [5000, "price  cannot be greater than 5000"]
    // },

    price: Number,
    manufacturer: {
        manufacturerName: String,
        Address: String,
        customerCareContact: Number
    },
    manufactureDate: Date,
    expireDate: Date,
    nutritionFact: [],
    // ingredients: {
    //     type: String,
    //     required: true
    // },
    ingredients: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
})
export default mongoose.model("products", schema)
