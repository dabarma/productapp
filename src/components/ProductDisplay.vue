<template>
  <div>
    <table class="table table-sm table-bordered" :class="'table-striped' == striped">
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="p in products" :key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.category }}</td>
          <td>{{ p.price }}</td>
          <td>
            <router-link
              :to="{ name: 'editor', params: { id: p.id} }"
              :class="editClass"
              class="btn btn-sm mr-1"
            >Edit</router-link>
            <button class="btn btn-sm" @click="deleteProduct(p)" :class="deleteClass">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-center">
      <router-link to="/products/create" class="btn btn-primary">Create New</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  /*   data() {
    return {
      products: [],
    };
  }, */
  computed: {
    ...mapState(["products"]),
    ...mapState({
      striped: (state) => state.prefs.stripedTable,
    }),
    ...mapGetters({
      tableClass: "prefs/tableClass",
      editClass: "prefs/editClass",
      deleteClass: "prefs/deleteClass",
    }),
  },
  /*   created() {
    //this.getProducts();
    this.setEditButtonColor(false);
    this.setDeleteButtonColor(false);
  }, */
  methods: {
    editProduct(product) {
      this.selectProduct(product);
      //this.selectComponent("editor");
      this.$router.push("/edit");
    },
    createNew() {
      this.selectProduct();
      //this.selectComponent("editor");
      this.$router.push("/edit");
    },
    ...mapMutations({
      selectProduct: "selectProduct",
      //selectComponent: "nav/selectComponent",
      setEditButtonColor: "prefs/setEditButtonColor",
      setDeleteButtonColor: "prefs/setDeleteButtonColor",
    }),
    ...mapActions({
      //getProducts: "getProductsAction",
      deleteProduct: "deleteProductAction",
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>