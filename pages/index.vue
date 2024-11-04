<template><div></div></template>
<script setup lang="ts">
const router = useRouter();
onBeforeMount(() => {
  router.push('/users-page1');
});
</script>
