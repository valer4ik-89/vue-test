<template>
  <span class="tag">{{ tag }}</span>
</template>

<script>
export default {
  name: "CardTag",
  props: {
    tag: String
  }
};
</script>

<style lang="scss" scoped>
.tag {
  display: inline-block;
  padding: 5px 10px;
  background: rgb(219, 219, 219);
  color: #333;
  margin: 2px;
  border-radius: 15px;
  user-select: none;
}
</style>
