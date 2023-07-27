<template>
  <main class="main">
    <div class="button-wrapper">
      <BaseButton
        :placeholderText="'Back'"
        @click="$router.go(-1)"
      ></BaseButton>
    </div>
    <h2>User Info:</h2>
    <TheUserCard :userInfo="getCurrentDataUser"></TheUserCard>
    <h2>Post: {{ $route.params.postId }}</h2>
    <ThePost :postInfo="getCurrentDataPost"></ThePost>
    <h2>Comments:</h2>
    <TheComment
      v-for="commentInfo in getCommentsInfo"
      :key="commentInfo.id"
      :commentInfo="commentInfo"
    ></TheComment>
    <TheFormCreateComment
      :idPostCreate="$route.params.postId"
    ></TheFormCreateComment>
  </main>
</template>
<script>
import BaseButton from '@/UI/BaseButton/BaseButton.vue';
import TheUserCard from '@/components/TheUserCard/TheUserCard.vue';
import ThePost from '@/components/ThePost/ThePost.vue';
import TheComment from '@/components/TheComment/TheComment.vue';
import TheFormCreateComment from '@/components/TheFormCreateComment/TheFormCreateComment.vue';

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AboutPostView',
  components: {
    ThePost,
    TheComment,
    TheUserCard,
    TheFormCreateComment,
    BaseButton,
  },
  methods: {
    ...mapActions(['getCurrentPost', 'getComments', 'getCurrentUser']),
  },
  computed: {
    ...mapGetters([
      'getCurrentDataPost',
      'getCommentsInfo',
      'getCurrentDataUser',
    ]),
  },
  mounted() {
    this.getCurrentUser(this.$route.params.userId);
    this.getCurrentPost(this.$route.params.postId);
    this.getComments(this.$route.params.postId);
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 3vh 30px 2vh 30px;
  .button-wrapper {
    align-self: flex-start;
    width: 30%;
  }
  .posts-list-wrapper {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
