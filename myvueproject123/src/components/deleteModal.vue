
<template>
  <div>
    <modal name="hello-world">
      <h3>you sure want to delete?</h3>
      <button v-on:click="deleteData(message)">Yes,Delete it.</button>
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
      console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<", id);
      this.$emit("messageFromChild", id);
    },

    hide() {
      this.$modal.hide("hello-world");
    }
    // show(id) {
    //   this.deletingId = id;
    //   this.$modal.show("hello-world", { id: id });
    // },
    // beforeOpen(event) {
    //   this.deletingId = event.params.id;
    //   console.log(event.params.id);
    // }
  }
};
</script>
<style>
