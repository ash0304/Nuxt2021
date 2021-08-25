<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import AdminPostForm from "~/components/Admin/AdminPostForm";

export default {
  components: {
    AdminPostForm
  },
  asyncData(context) {
    return axios
      .get(
        `https://nuxt-blog-4fd31-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${context.params.postId}.json`
      )
      .then(res => {
        return {
          loadedPost: res.data
        };
      })
      .catch(e => {
        context.error(e);
      });
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
