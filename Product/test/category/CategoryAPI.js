/*var mochatest = require("../mochatest")*/
var chai = require("chai")
let chaiHttp = require("chai-http")
var expect = chai.expect
chai.use(chaiHttp)
const server = "http://localhost:3000/Category/"
describe("checking positive and negative post request for save (category)", () => {
    describe("/get my request", () => {
        it("positive post request", (done) => {
            chai.request(server)
                .post("/")
                .send({
                    name: "AppY5",
                    taste: "sweet",
                    sugarFree: false,
                    TypeOfBiscuits: "Drop Biscuits"

                })
                .end((err, res) => {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    done()
                })
        })
    })

})