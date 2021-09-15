<template>
  <div class="panel">
    <input
      type="text"
      class="panel__search"
      placeholder="Filter"
      v-model="filterText"
    />
    <div class="panel__sort" @click="sortBy('likes')">Sort by Likes</div>
    <div class="panel__sort" @click="sortBy('comments')">Sort by Comments</div>
  </div>
</template>

<script>
import { debounce } from "@/helpers/debounce";
export default {
  name: "Panel",
  data: () => ({
    filterText: ""
  }),
  methods: {
    sortBy(sortkey) {
      this.$emit("sort", sortkey);
    }
  },
  watch: {
    filterText: debounce(function(newVal) {
      this.$emit("filter", newVal);
    }, 300)
  }
};
</script>

<style lang="scss" scoped>
.panel {
  width: 100%;
  background: #777;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &__sort {
    cursor: pointer;
    color: #fff;
    margin: 0 10px;
  }
}
</style>
