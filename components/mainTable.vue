<template>
  <section>
    <div class="layout">
      <div>
        <div class="table-header">
          <div class="table-header--name">Name</div>

          <div class="table-header--email">Email</div>
          <div class="table-header--phone">Phone</div>
        </div>
        <div class="table-users" v-for="user in users" :key="user.id">
          <NuxtLink class="user-link" :to="`/todo-user-${user.id}`">
            <div class="table-users--name">{{ user.name }}</div>
          </NuxtLink>
          <div class="table-users--email">{{ user.email }}</div>
          <div class="table-users--phone">{{ user.phone }}</div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <NuxtLink
        v-for="(page, i) in pages"
        :key="i"
        :to="`/users-page${page}`"
        :class="{ 'current-page': page == currentPage }"
        >{{ page }}</NuxtLink
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import UseGetUsers from '~/composables/UseGetUsers';

const props = defineProps({
  users: {
    type: Array,
    default: () => [],
  },
  pages: {
    type: String,
    default: '',
  },
  currentPage: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
}
.table-header,
.table-users {
  display: flex;
  margin-bottom: 10px;
  border: 1px solid $bg-dark-gary;
  background-color: $bg-gray;
  border-radius: 5px;
  padding: 0px 25px;
  margin: 10px 0px;
  box-shadow: 10px 5px 5px #513409;
  div {
    min-width: 300px;
    padding: 5px;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  a {
    margin-right: 10px;
    text-decoration: none;
    margin-top: 10px;
    padding: 2px 4px;
    background-color: $bg-gray;
    text-decoration-skip-ink: auto;
    border: 1px solid black;
  }

  .current-page {
    border: 1px solid black;
    box-shadow: 5px 5px 5px #513409;
  }
}
a.user-link:active,
a.user-link {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
a.user-link:hover {
  color: burlywood;
}
</style>
