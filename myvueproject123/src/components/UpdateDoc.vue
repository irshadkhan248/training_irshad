<template>
  <div>
    <label>Name:</label>
    <input type="text" :placeholder="product_Arr.name" v-model="product_Arr.name" />
    <br />
    <label>Price:</label>
    <input type="text" :placeholder="product_Arr.price" v-model="product_Arr.price" />
    <br />
    <label>Ingredients:</label>
    <input type="text" :placeholder="product_Arr.ingredients" v-model="product_Arr.ingredients" />
    <br />
    <!-- <button v-on:click="UpdateData(product_Arr)">UPDATE</button> -->
    <router-link to="/homePage">
      <button v-on:click="UpdateData(product_Arr)">UPDATE</button>
    </router-link>
    <router-link to="/homePage">
      <button>CANCEL</button>
    </router-link>
    <br />
  </div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from "axios";
import Vue from "vue";
export default {
  data() {
    return {
      id: 0,
      product_Arr: []
    };
  },
  created() {
    this.id = this.$route.params.id;
    console.log("in created of  UpdateDoc123 ::::::::" + this.id);
    axios
      .get("http://localhost:3000/Product/getOneById/" + this.id)
      .then(response => {
        // console.log(response.data.name);
        this.product_Arr = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    UpdateData(product_Arr) {
      console.log("UpdateData of UpdateDoc:  " + this.id);
      axios
        .put("http://localhost:3000/product/" + this.id, product_Arr)
        .then(response => {})
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
        <style scoped>
</style>