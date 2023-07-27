<template>
  <div class="user">
    <div class="user-name">{{ userInfo.name }} {{ userInfo.username }}</div>
    <div class="user-address">Address:
      {{ userInfo.address?.city }}, {{ userInfo.address?.street }},
      {{ userInfo.address?.suite }}, {{ userInfo.address?.zipcode }}
    </div>
    <div class="user-phone">Phone: {{ userInfo.phone }}</div>
    <div class="user-website">Website: {{ userInfo.website }}</div>
    <div class="user-company">Company: {{ userInfo.company?.name }}</div>
    <div class="user-email">{{ userInfo.email }}</div>
  </div>
</template>

<script>
export default {
  name: 'TheUserCard',
  props: {
    userInfo: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  border-radius: 0.4rem;
  padding: 1rem;

  border: 1px solid black;
  box-shadow: 0px 0px 10px -5px black;

  .user-name {
    font-size: 25px;
    font-weight: 600;
    color: tomato;
  }
  .user-email {
    font-size: 15px;
    font-weight: 600;
    color: black;
  }
}
</style>
