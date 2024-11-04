<template>
  <div>
    <div v-if="!isloaded" class="page-loader">
      <img class="loader" src="~/assets/img/loader.svg" alt="Loader" />
    </div>
    <div v-else>
      <div class="main">
        <MainTable
          :users="usersOnPage"
          :pages="pages"
          :currentPage="currentPage"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
}
</style>
<script setup lang="ts">
import useGetUsers from '~/composables/useGetUsers';
const { users, isloaded } = await useGetUsers();

const route = useRoute();
const currentPage = ref(route.fullPath.split('page')[1]);
const getUsersFrom = ref(
  +currentPage.value === 1 ? 0 : (+currentPage.value - 1) * 5
);
const getUsersTo = ref(+currentPage.value === 1 ? 5 : +currentPage.value * 5);
const usersOnPage = ref(
  users.value.slice(getUsersFrom.value, getUsersTo.value)
);
const pages = ref(users.value.length / 5);
</script>
