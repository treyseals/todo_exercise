import { ref } from "vue";

const items = ref([]);

const fetchTodos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todos_resp = [
        { id: "1", name: "Todo 1" },
        { id: "2", name: "Todo 2" },
        { id: "3", name: "Todo 3" }
      ];

      items.value = todos_resp ;

      resolve(todos_resp);
    }, 500);
  });
};

export { fetchTodos, items };
