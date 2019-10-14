const router = Router()

router.get("/", (req, res) => {
    CategoryModel.search(req.query, res.callback)
})
router.get("/:id", (req, res) => {
    CategoryModel.getOne(req.params, res.callback)
})

router.post("/def/searchByExactName/:name", (req, res) => {
    CategoryModel.searchByExactName(req.params, res.callback)
    //console.log("req.query:::::::",req.params)
})

router.post("/abc/searchNameUsingAlphabetSequence/:name", (req, res) => {
    CategoryModel.searchNameUsingAlphabetSequence(req.params, res.callback)
    // console.log("req.params",req.params)
})

router.post("/", (req, res) => {
    CategoryModel.saveData(req.body, res.callback)
})

router.put("/:id", (req, res) => {
    //res.send(`Update For Id ${req.params.id}`)
    CategoryModel.updateCategory(req.params, req.body, res.callback)
})

router.patch("/:id", (req, res) => {
    res.send(`Path For Id ${req.params.id}`)
})

router.delete("/:id", (req, res) => {
    CategoryModel.deleteCategory(req.params, res.callback)
})

router.get("/abc/GroupByUsingProductCategory", (req, res) => {
    CategoryModel.GroupByUsingProductCategory(req.query, res.callback)
})

export default router
