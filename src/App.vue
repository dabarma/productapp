<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col text-center m-2">
        <div class="btn-group">
          <router-link
            tag="button"
            to="/products"
            class="btn btn-primary"
            active-class="btn-info"
          >Products</router-link>
          <router-link
            tag="button"
            to="/preferences"
            class="btn btn-primary"
            exact-active-class="btn-info"
          >Preferences</router-link>
          <router-link
            to="/named/tableLeft"
            class="btn btn-primary"
            active-class="btn-info"
          >Table Left</router-link>
          <router-link
            to="/named/tableRight"
            class="btn btn-primary"
            active-class="btn-info"
          >Table Right</router-link>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col m-2">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("getProductsAction");
  },
};
</script>
<style scoped>
</style>

