<template>
  <div>
    <label>Name:</label>
    <input type="text" placeholder="Name" v-model="productData.name" />
    <br />
    <label>Price:</label>
    <input type="text" placeholder="Price" v-model="productData.price" />
    <br />
    <label>Ingredients:</label>
    <input type="text" placeholder="Ingredients" v-model="productData.ingredients" />
    <br />
    <button v-on:click="insertData()">INSERT DOCUMENT</button>
    <br />
    <br />
    <!-- <button v-on:click="toaster()">TOAST</button> -->
    <table>
      <tr>
        <th>NAME</th>
        <th>PRICE</th>
        <th>INGREDIENTS</th>
        <th>ACTION</th>
      </tr>
      <tr v-for="(pro, idx) in data1" :key="idx">
        <td>{{ pro.name }}</td>
        <td>{{ pro.price }}</td>
        <td>{{ pro.ingredients }}</td>
        <td>
          <button v-on:click="show(pro._id)">Delete</button>
          <router-link :to="{ name: 'HelloWorld-aboutUs', params: { id: pro._id } }">
            <button>Edit</button>
          </router-link>
        </td>
      </tr>
    </table>
    <modal :message="deletingId" v-on:messageFromChild="deleteData" />
  </div>
</template>

<script>
/* eslint-disable*/
import axios from "axios";
import modal from "../components/deleteModal.vue";
import Vue from "vue";
import VModal from "vue-js-modal";
Vue.use(VModal);
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
// delete process throw components
import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  components: {
    modal
  },
  data() {
    return {
      data1: "",
      productData: { name: "", price: "", ingredients: "" },
      deletingId: ""
    };
  },
  created() {
    // console.log("in created::::::::");
    axios.get("http://localhost:3000/product/searchAll").then(response => {
      this.data1 = response.data;
    });
  },
  methods: {
    insertData() {
      axios
        .post("http://localhost:3000/product/", this.productData)
        .then(response => {
          window.location.reload(true);
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    show(id) {
      this.deletingId = id;
      this.$modal.show("hello-world", { id: id });
    },
    deleteData(id) {
      console.log("id of deleting item.<<<<<<<<<<<<<<<<<<", id);
      // var result = confirm("are you sure want to delete?");
      // if (result) {
      axios
        .delete("http://localhost:3000/product/" + id)
        .then(response => {
          window.location.reload(true);
          // console.log(response)
        })
        .catch(error => {
          console.log(error);
        });
      // }
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(2)
    },
    price: {
      between: between(1, 5000)
    },
    ingredients: {
      required
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #21fcf1;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #080808;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: hsla(187, 100%, 50%, 0.5);
}
</style>