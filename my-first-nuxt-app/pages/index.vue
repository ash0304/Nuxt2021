<template>
  <section class="container">
    <nuxt-link to="/users">Users</nuxt-link>
    <button @click="goToProduct">Products</button>
  </section>
</template>

<script>
export default {
  methods: {
    goToProduct() {
      this.$router.push("/products");
    }
  }
};
</script>
