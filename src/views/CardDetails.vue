<template>
  <div v-if="!loading">
    <h3>Card Details</h3>
    <img :src="image.largeImageURL" alt="" srcset="" />
    <div class="image-info">
      <div class="image__type">Image Type: {{ image.type }}</div>
      <div class="image__downloads">Downloaded: {{ image.downloads }}</div>
      <div class="image__size">Image Size: {{ image.imageSize }}</div>
      <div class="image__likes">Likes: {{ image.likes }}</div>
      <div class="image__tags">Tags: {{ image.tags }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CardDetails",
  data: () => ({
    loading: true
  }),
  computed: {
    ...mapGetters(["image"])
  },
  async mounted() {
    const id = this.$route.params.id;
    this.$store.dispatch("fetchImageById", id);
    this.loading = false;
  },
  beforeDestroy() {
    this.$store.commit("CLEAR_IMAGE");
  }
};
</script>

<style></style>
