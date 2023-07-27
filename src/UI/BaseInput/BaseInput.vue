<template>
  <input
    class="input"
    :placeholder="placeholderText"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'BaseInput',
  emits: ['update:modelValue'],
  props: {
    placeholderText: {
      type: String,
      default: 'Enter value...',
    },
    modelValue: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;

  font-size: 20px;
  font-weight: 300;
  color: black;
  border-radius: 0.4rem;
  padding: 1rem 1rem 1rem 1rem;

  border: 1px solid black;
  box-shadow: 0px 0px 10px -5px black;
}
</style>
