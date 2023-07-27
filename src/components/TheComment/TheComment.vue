<template>
  <div class="comment">
    <div class="comment-name">{{ commentInfo.name }}</div>
    <div class="comment-body">{{ commentInfo.body }}</div>
    <div class="comment-email">{{ commentInfo.email }}</div>
    <div class="comment-id">ID: {{ commentInfo.id }}</div>
  </div>
</template>

<script>
export default {
  name: 'TheComment',
  props: {
    commentInfo: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.comment {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  border-radius: 0.4rem;
  padding: 1rem;

  border: 1px solid black;
  box-shadow: 0px 0px 10px -5px black;

  .comment-name {
    font-size: 25px;
    font-weight: 600;
    color: #ffcb74;
  }
  .comment-body {
    font-size: 20px;
    font-weight: 200;
    color: black;
  }
  .comment-email {
    font-size: 15px;
    font-weight: 600;
    color: black;
  }
  .comment-id{
    font-size: 10px;
    font-weight: 600;
    color: black;
  }
}
</style>
