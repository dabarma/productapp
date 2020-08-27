<template>
  <div>
    <h3 class="btn-primary text-center text-white p-1">{{ editing ? "Edit":"Create"}}</h3>
    <div class="form group">
      <label for>ID</label>
      <input class="form-control" v-model="product.id" />
    </div>
    <div class="form group">
      <label for>Name</label>
      <input class="form-control" v-model="product.name" />
    </div>
    <div class="form group">
      <label for>Category</label>
      <input class="form-control" v-model="product.category" />
    </div>
    <div class="form group">
      <label for>Price</label>
      <input class="form-control" v-model="product.price" />
    </div>

    <div class="text-center">
      <button class="btn btn-primary" @click="save">{{ editing ? "Save" : "Create" }}</button>
      <router-link :to="{ name: 'table'}" class="btn btn-secondary">Cancel</router-link>
      <router-link v-if="editing" :to="nextUrl" class="btn btn-info">Next</router-link>
    </div>
  </div>
</template>

<script>
/* import EditorField from "@/components/EditorField.vue"; */
/* import Vue from "vue"; */

let unwatcher;

export default {
  data() {
    return {
      editing: false,
      product: {},
    };
  },
  computed: {
    nextUrl() {
      if (this.product.id != null && this.$store.state.products != null) {
        let index = this.$store.state.products.findIndex(
          (p) => p.id == this.product.id
        );
        let target =
          index < this.$store.state.products.length - 1 ? index + 1 : 0;
        return `/edit/${this.$store.state.products[target].id}`;
      }

      return "/edit";
    },
  },
  methods: {
    async save() {
      await this.$store.dispatch("saveProductAction", this.product);
      //this.$store.commit("nav/selectComponent", "table");
      this.$router.push({ name: "table" });
      this.product = {};
    },
    /*     cancel() {
      this.$store.commit("selectProduct");
      this.$store.commit("nav/selectComponent", "table");
    }, */
    selectProduct(route) {
      if (route.path == "/create") {
        this.editing = false;
        this.product = {};
      } else {
        let productId = route.params.id;
        let selectedProduct = this.$store.state.products.find(
          (p) => p.id == productId
        );
        this.editing = true;
        this.product = {};
        Object.assign(this.product, selectedProduct);
      }
    },
  },
  created() {
    unwatcher = this.$store.watch(
      (state) => state.products,
      this.selectProduct(this.$route)
    );
    this.selectProduct(this.$route);
  },
  beforeDestroy() {
    unwatcher();
  },
  beforeRouteUpdate(to, from, next) {
    this.selectProduct(to);
    next();
  },
};
</script>

<style lang="scss" scoped>
</style>