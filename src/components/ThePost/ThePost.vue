<template>
  <div class="post">
    <div class="post-title">{{ postInfo.title }}</div>
    <div class="post-body">{{ postInfo.body }}</div>
  </div>
</template>

<script>
export default {
  name: 'ThePost',
  props: {
    postInfo: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  border-radius: 0.4rem;
  padding: 1rem;

  border: 1px solid black;
  box-shadow: 0px 0px 10px -5px black;

  cursor: pointer;
  transition: all 0.15s ease-in;
  &:hover {
    transform: scale(1.01);
  }
  .post-title {
    font-size: 25px;
    font-weight: 600;
    color: #42b983;
  }
  .post-body {
    font-size: 20px;
    font-weight: 200;
    color: black;
  }
}
</style>
