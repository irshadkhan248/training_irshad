/* eslint-disable no-undef */
export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */
    search: function(_query, callback) {
        // console.log("\n\nreceived::::::::::",_query)
        Category.find(_query).exec(callback)
        // callback(null,products)
    },
    searchByExactName: function(data, callback) {
        //console.log("\n\nreceived::::::::::",_query)
        Category.findOne({ name: data.name }).exec(callback)
        // callback(null,products)
    },

    // searchByExactName:function(body, callback) {
    //     //console.log("\n\nreceived::::::::::",_query)
    //     Products.findOne({name:body.name}).exec(callback)
    //     // callback(null,products)
    // },

    searchNameUsingAlphabetSequence: function(data, callback) {
        Category.find({ name: { $regex: data.name, $options: "i" } }).exec(
            callback
        )
    },

    getOne(data, callback) {
        Category.findOne({
            _id: data.id
        }).exec(callback)
    },

    saveData: (data, callback) => {
        const category = new Category(data)
        category.save(callback)
    },
    deleteCategory: (data, callback) => {
        // console.log(data)
        Category.deleteOne({ _id: data.id }).exec(callback)
    },

    updateCategory: (data, body, callback) => {
        // console.log(data)
        // console.log(body)
        Category.updateOne(
            { _id: data.id },
            {
                $set: body
            }
        ).exec(callback)
    },
    GroupByUsingProductCategory: (_query, callback) => {
        var order = []
        var obj = Category.find({}, { name: 1, sugarFree: 1, _id: 0 })
        //  console.log(">>>>>>>>>>>>>>>>>>>>>", obj)
        var iterator = function(index, callback) {
            order.push(index)
            // console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<", index.price)
            callback(null, index.sugarFree)
        }
        async.groupBy(obj, iterator, function(err, res) {
            callback(null, res)
            console.log(res)
            // console.log(order)
        })
    }
}
