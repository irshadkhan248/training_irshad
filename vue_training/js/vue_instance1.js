var vm = new Vue({
    el: '#vue_det1',
    data: {
        firstname: "Sumit",
        lastname: "Gupta",
        address: "Sion",
        company: "Wohlig Transformation",
    },
    methods: {
        mydetails: function () {
            return "I am " + this.firstname + " " + this.lastname + "." + " address is " + this.address + "." + " company " + this.company + ".";
        }
    }
})