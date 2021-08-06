<template>
  <section class="post-list">
    <PostPreview
      id="1"
      thumbnail="https://www.hydrocarbons-technology.com/wp-content/uploads/sites/9/2020/09/shutterstock_1152185600-1440x1008-1-857x600.jpg"
      title="Hello there!"
      previewText="This is my first post!"
    />
    <PostPreview
      id="2"
      thumbnail="https://www.hydrocarbons-technology.com/wp-content/uploads/sites/9/2020/09/shutterstock_1152185600-1440x1008-1-857x600.jpg"
      title="Hello there!"
      previewText="This is my second post!"
    />
    <PostPreview
      id="3"
      thumbnail="https://www.hydrocarbons-technology.com/wp-content/uploads/sites/9/2020/09/shutterstock_1152185600-1440x1008-1-857x600.jpg"
      title="Hello there!"
      previewText="This is my third post!"
    />
  </section>
</template>

<script>
import PostPreview from "~/components/Posts/PostPreview.vue";

export default {
  components: {
    PostPreview
  }
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
