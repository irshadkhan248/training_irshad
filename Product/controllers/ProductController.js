import ProductModel from "../models/ProductModel"
import {
    runInContext
} from "vm"

const router = Router()

router.get("/", (req, res) => {
    console.log(req.query)
    ProductModel.search(req.query, res.callback)
})

router.get("/getOneById/:id", (req, res) => {
    ProductModel.getOne(req.params, res.callback)
})

router.post("/def/searchByExactName/:name", (req, res) => {
    ProductModel.searchByExactName(req.params, res.callback)
    //console.log("req.query:::::::",req.params)
})

router.post("/abc/searchNameUsingAlphabetSequence/:name", (req, res) => {
    ProductModel.searchNameUsingAlphabetSequence(req.params, res.callback)
    // console.log("req.params",req.params)
})

router.post("/", (req, res) => {
    ProductModel.saveData(req.body, res.callback)
})

router.put("/:id", (req, res) => {
    ProductModel.updateProduct(req.params, req.body, res.callback)
})
//res.send(`Update For Id ${req.params.id}`)

// router.patch("/:id", (req, res) => {
//     res.send(`Path For Id ${req.params.id}`)
// })

router.delete("/:id", (req, res) => {
    ProductModel.deleteProduct(req.params, res.callback)
})
router.get("/waterfallAPI", (req, res) => {
    ProductModel.waterfallAPI(req.body, res.callback)
})

router.get("/listOfCategoryAPI", (req, res) => {
    console.log("iam in the  listOfCategoryAPI")
    ProductModel.listOfCategoryAPI(req.body, res.callback)
})

router.get("/parallelFunction", (req, res) => {
    // console.log("iam in the  parallelFunction")
    ProductModel.parallelFunctionAPI(req.query, res.callback)
})

router.get("/whilstSearch", (req, res) => {
    console.log("iam in the  whilstSearchAPIController")
    ProductModel.whilstSearchAPI(req.query, res.callback)
})

router.get("/SearchUsingConcat", (req, res) => {
    console.log(":::::::::i'm in SearchUsingConcat API:::::::::")
    ProductModel.SearchUsingConcat(req.body, res.callback)
})

router.get("/AsyncConcatEachInParallelFunction", (req, res) => {
    // console.log(":::::::::i'm in AsyncConcatInParallelFunction API:::::::::")
    ProductModel.AsyncConcatEachInParallelFunction(req.body, res.callback)
})

router.get("/searchAll", (req, res) => {
    ProductModel.searchAll(req.query, res.callback)
})

router.get("/GroupByUsingProductPrice", (req, res) => {
    ProductModel.GroupByUsingProductPrice(req.query, res.callback)
})

router.get("/AsyncEveryDemo", (req, res) => {
    ProductModel.AsyncEveryDemo(req.query, res.callback)
})

router.get("/AsyncFilterDemo", (req, res) => {
    ProductModel.AsyncFilterDemo(req.query, res.callback)
})
export default router