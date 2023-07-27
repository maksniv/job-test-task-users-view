<template>
  <button class="button" v-bind="$attrs">{{ placeholderText }}</button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    placeholderText: {
      type: String,
      default: 'Click',
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  border-radius: 0.4rem;
  padding: 1rem 0.5rem 1rem 0.5rem;

  background-color: #a2b4cf;
  

  border: 1px solid black;
  box-shadow: 0px 0px 10px -5px black;
  cursor: pointer;
  transition: all 0.15s ease-in;
  &:hover {
    transform: scale(1.01);
  }
  &:disabled {
    background-color: #6e747c;
  }
}
</style>
