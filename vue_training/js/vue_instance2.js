var vm = new Vue({
    el: '#vue_det2',
    data: {
        firstname: "Rumit",
        lastname: "Yadav",
        address: "bandra",
        company: "Wohlig Transformation",
    },
    methods: {
        mydetails: function () {
            return "I am " + this.firstname + " " + this.lastname + "." + " address is " + this.address + "." + " company " + this.company + ".";
        }
    }
})