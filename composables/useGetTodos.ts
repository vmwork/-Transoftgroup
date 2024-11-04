export default async () => {
  interface ITodos {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  const config = useRuntimeConfig();
  const isloaded = ref(false);
  const todos = ref<ITodos>([]);
  // const getTodos = async (id) => {
  //   isloaded.value = false;
  //   console.log(`${config.public.apiBase}todos?userId=${id}`);
  //   const { data: todos, status } = await useAsyncData('todos', () =>
  //     $fetch(`${config.public.apiBase}todos?userId=${id}`)
  //   );
  //   todos.value = data.value;
  //   if (todos.value.length > 0) {
  //     setTimeout(() => (isloaded.value = true), 1000);
  //   }
  // };
  const getTodos = async (id) => {
    console.log('start');
    isloaded.value = false;
    try {
      console.log('try');
      const { data, error } = useFetch(
        `${config.public.apiBase}todos?userId=${id}`
      );
      console.log(data.value);
    } catch (err) {
      console.log(err);
    }
  };
  return { todos, getTodos, isloaded };
};
