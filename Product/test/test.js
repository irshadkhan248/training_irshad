require("@babel/register")({
    presets: ["@babel/preset-env"],
    plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-async-to-generator"
    ]
})
require("wohlig-framework-core")
var chai = require("chai"),
    chaiHttp = require("chai-http")

chai.use(chaiHttp)
global.adminUrl = env.url + ":" + env.port + "/"

require("./category/CategoryAPI.js")
require("./product/productAPI.js")
// require("./UserPackage/UserPackageApi.js")
// require("./UpcomingEvents/UpcomingEventsApi.js")
// require("./StoreCategory/StoreCategoryApi.js")
// require("./StoreProduct/StoreProductApi.js")
// require("./ReferalLogs/ReferalLogsApi.js")
// require("./Packages/PackagesApi.js")
// require("./Order/OrderApi.js")
// require("./Cart/CartApi.js")
// require("./CreditLimitLogs/CreditLimitLogsApi.js")
// require("./EntryData/EntryDataApi.js")
// require("./GalleryCategory/GalleryCategoryApi.js")
// require("./GalleryImages/GalleryImagesApi.js")
// require("./Games/GamesApi.js")
// require("./LoyaltyTransactions/LoyaltyTransactionsApi.js")
// require("./Notification/NotificationApi.js")