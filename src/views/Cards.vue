<template>
  <div>
    <Panel @filter="filterImages" @sort="sortImages" />
    <div class="cards">
      <Card v-for="image in imageList" :key="image.id" :image="image" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapGetters } from "vuex";
import Panel from "@/components/Panel.vue";

export default {
  name: "Cards",
  data: () => ({
    imageList: []
  }),
  computed: {
    ...mapGetters(["images"])
  },
  async mounted() {
    await this.$store.dispatch("fetchImages");
    this.imageList = this.images;
  },
  methods: {
    filterImages(val) {
      this.imageList = this.images.filter(image => {
        return image.tags.includes(val.toLowerCase());
      });
    },
    sortImages(sortKey) {
      const images = [...this.imageList];
      images.sort((a, b) => {
        return a[sortKey] > b[sortKey] ? -1 : 1;
      });
      this.imageList = images;
    }
  },
  components: {
    Card,
    Panel
  }
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
