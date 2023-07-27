<template>
  <form class="form-comment-create">
    <BaseInput
      :placeholderText="'Enter title comment...'"
      v-model="modelDataComment.name"
    ></BaseInput>
    <BaseInput
      :placeholderText="'Enter comment...'"
      v-model="modelDataComment.body"
    ></BaseInput>
    <BaseInput
      :placeholderText="'Enter your email...'"
      v-model="modelDataComment.email"
    ></BaseInput>
    <BaseButton
      :placeholderText="'Send'"
      @click.prevent="send"
      :disabled="disabledButton"
    ></BaseButton>
  </form>
</template>

<script>
import BaseInput from '@/UI/BaseInput/BaseInput.vue';
import BaseButton from '@/UI/BaseButton/BaseButton.vue';
import { mapActions } from 'vuex';

export default {
  name: 'TheFormCreateComment',
  components: { BaseInput, BaseButton },
  data() {
    return {
      modelDataComment: {
        postId: this.idPostCreate,
        name: '',
        email: '',
        body: '',
      },
    };
  },
  props: {
    idPostCreate: {
      type: String,
    },
  },
  methods: {
    ...mapActions(['createComment']),
    send() {
      this.createComment(this.modelDataComment);
      this.modelDataComment.name = '';
      this.modelDataComment.email = '';
      this.modelDataComment.body = '';
    },
  },
  computed: {
    disabledButton() {
      if (
        this.modelDataComment.name === '' ||
        this.modelDataComment.body === '' ||
        this.modelDataComment.email === ''
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-comment-create {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;

  border-radius: 0.4rem;
  padding: 1rem;

  border: 1px solid black;
  box-shadow: 0px 0px 10px -5px black;
}
</style>
