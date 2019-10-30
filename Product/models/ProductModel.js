/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable quotes */
import Category from "../mongooseModel/Category"
import {
    compileFunction
} from "vm"
import {
    createBrotliCompress
} from "zlib"
import Products from "../mongooseModel/Products"
import axios from "axios";
export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */

    waterfallAPI: function (_query, callback) {
        async.waterfall(
            [
                function (callback) {
                    Products.find()
                        .populate("category")
                        .exec(callback)
                },

                // args for next function

                function (wholeData, callback) {
                    let categoryName = []
                    _.forEach(wholeData, function (element) {
                        categoryName.push(element.category.name)
                    })
                    let uniqueName = _.uniq(categoryName)
                    callback(null, uniqueName)
                }
            ],
            callback
        )
    },

    parallelFunctionAPI: function (data, callback) {
        console.log("parallel api  Data:::::", data)
        async.parallel({
                Product: function (callback) {
                    Products.find({}, {
                        name: 1,
                        _id: 0
                    }).exec(callback)
                },
                Category: function (callback) {
                    Category.find({}, {
                        name: 1,
                        _id: 0
                    }).exec(callback)
                }
            },
            // optional callback
            function (err, results) {
                callback(null, results)
            }
        )
    },

    search: function (_query, callback) {
        var page = 3
        // console.log(page)
        async.whilst(
            function test(callback) {
                callback(null, page <= 3)
            },
            function ProductDetail(callback) {
                Products.find({}, {
                        name: 1,
                        price: 1
                    })
                    .sort({
                        price: 1
                    })
                    .limit(3)
                    .skip(page * 3 - 3)
                    .exec(callback)
                page++
            },
            callback
        )
    },

    SearchUsingConcat: (query, callback) => {
        // console.log(" wholeData::::::",query)
        async.concat(
            query,
            (val, next) => {
                console.log("value", val)
                next(null, val)
            },
            (error, result) => {
                callback(null, result)
            }
        )
    },

    searchByExactName: function (body, callback) {
        //console.log("\n\nreceived::::::::::",_query)
        Products.findOne({
            name: body.name
        }).exec(callback)

        // callback(null,products)
    },

    searchNameUsingAlphabetSequence: function (data, callback) {
        Products.find({
            name: {
                $regex: data.name,
                $options: "i"
            }
        }).exec(
            callback
        )
    },

    AsyncConcatEachInParallelFunction: function (body, callback) {
        async.parallel({
                concat: (callback) => {
                    async.concat(
                        Products.find(),
                        (val, next) => {
                            // console.log("ConcatVal", val)
                            next(null, val.name)
                        },
                        callback
                    )
                },
                concatLimit: (callback) => {
                    async.concatLimit(
                        body,
                        3,
                        (val, next) => {
                            next(null, val)
                        },
                        callback
                    )
                },
                concatSeries: (callback) => {
                    async.concatSeries(
                        body,

                        (val, next) => {
                            next(null, val)
                        },
                        callback
                    )
                },

                each: (callback) => {
                    async.each(
                        body,
                        // Products.find(),
                        (val, next) => {
                            console.log(":::::::::eachBody:::::::::", body)
                            next(null, val)
                        },
                        callback(null, "nothing To Execute")
                    )
                },
                eachLimit: (callback) => {
                    async.eachLimit(
                        body,
                        2,
                        // Products.find(),
                        (val, next) => {
                            console.log(":::::::::eachLimitBody:::::::::", body)
                            next(null, val)
                        },
                        callback(null, "nothing To Execute")
                    )
                },
                eachSeries: (callback) => {
                    async.eachSeries(
                        body,
                        // Products.find(),
                        (val, next) => {
                            console.log(
                                ":::::::::eachSeriesBody:::::::::",
                                body
                            )
                            next(null, val)
                        },
                        callback(null, "nothing To Execute")
                    )
                },
                GroupByUsingProductPrice: (callback) => {
                    var order = []
                    var obj = Products.find({}, {
                        name: 1,
                        price: 1,
                        _id: 0
                    })
                    //  console.log(">>>>>>>>>>>>>>>>>>>>>", obj)
                    var iterator = function (index, callback) {
                        //order.push(index)
                        // console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<", index.price)
                        callback(null, index.price)
                    }
                    async.groupBy(obj, iterator, function (err, res) {
                        callback(null, res)
                        //console.log(res)
                        // console.log(order)
                    })
                },
                AsyncEveryDemo: (callback) => {
                    var newArray = []
                    var obj = Products.find({}, {
                        name: 1,
                        price: 1,
                        _id: 0
                    })
                    var iterator = function (index, cb) {
                        newArray.push(index)
                        // console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<", index.price)
                        cb(null, index.price >= 0)
                    }
                    async.every(obj, iterator, function (err, res) {
                        callback(null, res)
                        // console.log(res)
                        //console.log(order);
                    })
                },
                AsyncDemo: (callback) => {
                    var newArray = []
                    var obj = Products.find({}, {
                        name: 1,
                        price: 1,
                        _id: 0
                    })
                    var iterator = function (index, cb) {
                        newArray.push(index)
                        // console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<", index.price)
                        cb(null, index.price >= 5)
                    }
                    async.filter(obj, iterator, function (err, res) {
                        callback(null, res)

                    })
                }
            },
            // optional callback
            function (err, results) {
                callback(null, results)
            }
        )
    },

    getOne(data, callback) {
        Products.findOne({
                _id: data.id
            })
            .populate("category")
            .exec(callback)
    },

    saveData: (data, callback) => {
        const products = new Products(data)
        products.save(callback)
    },

    deleteProduct: (data, callback) => {
        //   console.log(data)
        Products.deleteOne({
            _id: data.id
        }).exec(callback)
    },

    updateProduct: (data, body, callback) => {
        Products.updateOne({
            _id: data.id
        }, {
            $set: body
        }).exec(callback)
    },

    searchAll: (_query, callback) => {
        // console.log("in searchALL Model")
        Products.find().exec(callback)
    },

    DeliciousDelete: (_query, callback) => {
        // console.log("")
        Products.deleteMany({
            name: 'Delicious'
        }).exec(callback)
    }
}