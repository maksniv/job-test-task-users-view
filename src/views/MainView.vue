<template>
  <main class="main">
    <BaseSelect
      :optionValue="getSelectedSortValue"
      :options="getSortOptionsValue"
      @updateOptionValue="updateOptionValue"
    ></BaseSelect>
    <div class="posts-list-wrapper">
      <ThePost
        v-for="postInfo in getPostsInfoData"
        :key="postInfo.id"
        :postInfo="postInfo"
        @click="
          $router.push({
            name: 'aboutPost',
            params: { userId: postInfo.userId, postId: postInfo.id },
          })
        "
      ></ThePost>
    </div>
  </main>
</template>

<script>
import ThePost from '@/components/ThePost/ThePost.vue';
import BaseSelect from '@/UI/BaseSelect/BaseSelect.vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'MainView',
  components: { ThePost, BaseSelect },
  data() {
    return {};
  },
  methods: {
    ...mapActions(['getAllDataPosts', 'getAllDataUsers']),
    ...mapMutations(['SET_SELECTED_SORT_VALUE']),
    updateOptionValue(value) {
      this.SET_SELECTED_SORT_VALUE(value);
      console.log(value);
    },
  },
  computed: {
    ...mapGetters([
      'getPostsInfoData',
      'getSelectedSortValue',
      'getSortOptionsValue',
    ]),
  },
  mounted() {
    this.getAllDataPosts();
    this.getAllDataUsers();
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 3vh 30px 2vh 30px;
  .posts-list-wrapper {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
