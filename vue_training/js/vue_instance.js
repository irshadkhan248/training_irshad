var vm = new Vue({
    el: '#vue_det',
    data: {
        firstname: "Amit",
        lastname: "Shah",
        address: "Worli",
        company: "Wohlig Transformation",
    },
    methods: {
        mydetails: function () {
            return "I am " + this.firstname + " " + this.lastname + "." + " address is " + this.address + "." + " company " + this.company + ".";
        }
    }
})