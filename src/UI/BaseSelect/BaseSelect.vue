<template>
  <div class="select-wrapper">
    <select class="select" :value="optionValue" @change="changeOption">
      <option disabled value="">Filter by user</option>
      <option v-for="option in options" :key="option.id" :value="option.id">
        {{ option.name }}
      </option>
    </select>
    <button class="select-button" @click="changeOption">x</button>
  </div>
</template>

<script>
// &#10006;
export default {
  name: 'BaseSelect',
  props: {
    optionValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event = '') {
      this.$emit('updateOptionValue', event.target.value);
    },
    changeInput(event = '') {
      this.$emit('updateSearchValue', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.select-wrapper {
  position: relative;
  width: 100%;
  max-width: 250px;
  box-shadow: 0px 0px 10px -5px black;
  .select {
    width: 100%;
    height: 40px;
    border: 1px solid black;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;

    border-radius: 0.4rem;
  }
  .select-button {
    min-width: 22px;
    min-height: 22px;
    position: absolute;
    color: tomato;
    border: none;
    background-color: transparent;
    z-index: 1;
    top: calc(50% - 11px);
    right: calc(12% - 11px);
  }
}
</style>
