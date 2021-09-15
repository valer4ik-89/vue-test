<template>
  <div class="card">
    <router-link :to="{ path: `/details/${image.id}` }">
      <img class="card__img" :src="image.webformatURL" alt="image" />
    </router-link>
    <div class="card__info-line">
      <div class="card__tags">
        <CardTag v-for="tag in tags" :key="tag" :tag="tag" />
      </div>
      <div class="card__icons">
        <i class="far fa-thumbs-up"></i> {{ image.likes }}
        <i class="far fa-comment"></i> {{ image.comments }}
      </div>
    </div>
  </div>
</template>

<script>
import CardTag from "./CardTag.vue";

export default {
  name: "Card",
  props: {
    image: {
      type: Object,
      required: true
    }
  },
  computed: {
    tags() {
      return this.image.tags.split(",");
    }
  },
  components: {
    CardTag
  }
};
</script>

<style scoped lang="scss">
.card {
  position: relative;
  margin: 1rem;
  width: 320px;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.25s;
  &__info-line {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    padding: 3px;
    bottom: 0px;
    width: 100%;
    background: linear-gradient(
      0deg,
      rgba(73, 73, 73, 1) 0%,
      rgba(172, 172, 172, 0.8295693277310925) 50%,
      rgba(213, 213, 213, 0) 100%
    );
    font-size: 14px;
    color: #fff;
  }
  &:hover {
    transform: scale(1.05);
  }
}
</style>
