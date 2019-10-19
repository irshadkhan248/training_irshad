import axios from "axios";

var adminUrl = "http://localhost:3000";

export default {
    searchAll: callback => {
        return axios
            .post(adminUrl + 'ProductModel/searchAll', {})
            .then(allMarketData => {
                callback(null, allMarketData);
            })
            .catch(err => {
                callback(err);
            });
    }
}