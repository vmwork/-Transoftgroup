export default async () => {
  interface IUsers {
    name: string;
    email: string;
    phone: string;
  }
  const config = useRuntimeConfig();
  const userName = ref('');
  const isloaded = ref(false);
  const users = ref<[IUsers]>([]);

  const getUserName = (id: string) => {
    userName.value = users.value.filter(
      (el: IUsers) => +el.id === +id.value
    )[0];
  };
  const { data } = await useAsyncData('users', () =>
    $fetch(`${config.public.apiBase}users`)
  );
  // console.log(data);
  users.value = data.value;
  if (users.value.length > 0) {
    setTimeout(() => (isloaded.value = true), 1000);
  }
  return { users, getUserName, userName, isloaded };
};
