
<template>
  <div>
    <modal name="hello-world" @before-open="beforeOpen">
      <h3>you sure want to delete?</h3>
      <button v-on:click="deleteData(deletingId)">Yes,Delete it.</button>
      <button v-on:click="hide">No,Cancel.</button>
    </modal>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {};
  },
  props: {
    message: String
  },
  methods: {
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
    },
    show(id) {
      this.deletingId = id;
      this.$modal.show("hello-world", { id: id });
    },
    hide() {
      this.$modal.hide("hello-world");
    },
    beforeOpen(event) {
      this.deletingId = event.params.id;
      console.log(event.params.id);
    }
  }
};
</script>

<style>
