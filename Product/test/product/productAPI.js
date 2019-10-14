let chai = require("chai")
let chaiHttp = require("chai-http")
let expect = chai.expect
chai.use(chaiHttp)
const server = "http://localhost:3000/product"
describe("checking positive and negative delete request for delete data", () => {
    describe("deleteProduct", function () {
        it("positive test case for delete", (done) => {
            // console.log("Deleting all data in db first.")
            chai.request(server)
                .delete("/5d8b135c5a324f379de0b45f")
                // .send()
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    // console.log(res.status)
                    ///console.log("Getting positive response:", res.body)
                    done();
                })
        })

        it("negative test case for delete", (done) => {
            chai.request(server)
                .delete("/j5d")
                .end((err, res) => {
                    // console.log("err:::::::::", err, "\n")
                    // console.log("Getting negative response:", res.body)
                    expect(err).to.be.null
                    expect(res).to.have.status(500)
                    // console.log(res.status)
                    done()
                })
        })
    })
})

describe("checking positive and negative get request for search the data", () => {
    describe("/get my request", () => {
        it("positive get request", (done) => {
            chai.request(server)
                .get("/getOneById/5d8c8e9b44842b488aaa91bf")
                .send()
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })

    describe("/get my request", () => {
        it("negative get request", (done) => {
            chai.request(server)
                .get("/getOneById/123")
                .send()
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(500)
                    done()
                })
        })
    })
})

// describe("checking positive and negative post  request for saving data", () => {
//     describe("/post my request", () => {
//         it("positive post request", (done) => {
//             chai.request(server)
//                 .post("/")
//                 .send({
//                     manufacturer: {
//                         manufacturerName: "Britannia Industries7856",
//                         Address: "mumbai",
//                         customerCareContact: 9999111226
//                     },
//                     nutritionFact: [
//                         "fat=7grm",
//                         "protein=4grm",
//                         "calcium=20milligram"// describe("checking positive and negative post  request for saving data", () => {
//     describe("/post my request", () => {
//         it("positive post request", (done) => {
//             chai.request(server)
//                 .post("/")
//                 .send({
//                     manufacturer: {
//                         manufacturerName: "Britannia Industries7856",
//                         Address: "mumbai",
//                         customerCareContact: 9999111226
//                     },
//                     nutritionFact: [
//                         "fat=7grm",
//                         "protein=4grm",
//                         "calcium=20milligram"
//                     ],
//                     name: "Delicious",
//                     price: 15,
//                     manufactureDate: "2017-12-02T00:00:00.000Z",
//                     expireDate: "2019-12-02T00:00:00.000Z",
//                     ingredients: "wheat flour ,sugar,palm oil,salt,milk powder",
//                     category: "5d9db2451f91f15828f90e2b",
//                 })
//                 .end((err, res) => {
//                     expect(err).to.be.null
//                     expect(res).to.have.status(200)
//                     done()
//                 })
//         })
//     })
// })
//                     ],
//                     name: "Delicious",
//                     price: 15,
//                     manufactureDate: "2017-12-02T00:00:00.000Z",
//                     expireDate: "2019-12-02T00:00:00.000Z",
//                     ingredients: "wheat flour ,sugar,palm oil,salt,milk powder",
//                     category: "5d9db2451f91f15828f90e2b",
//                 })
//                 .end((err, res) => {
//                     expect(err).to.be.null
//                     expect(res).to.have.status(200)
//                     done()
//                 })
//         })
//     })
// })

describe("checking positive and negative update request for update data", () => {
    describe("/update my request", () => {
        it("positive update request", (done) => {
            chai.request(server)
                .put("/5d8c8e3144842b488aaa91bc")
                .send({
                    name: "5050"
                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })
    describe("/update my request", () => {
        it("negative update request", (done) => {
            chai.request(server)
                .put("/123456")
                .send({
                    name: "5050"
                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(500)
                    done()
                })
        })
    })
})