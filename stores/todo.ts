import { defineStore } from "pinia";

interface ITodo {
    title: string
    isDone: boolean
}

export const useTodoStore = defineStore('todos', () => {
    const todos = ref<ITodo[] | null>([])

    const getTodo = async () => {
        const { baseUrl, apiKey, secretKey } = useAppConfig();

        const { data, error } = await useFetch<ITodo[]>('rest/v1/todos', {
            baseURL: baseUrl,
            method: 'GET',
            headers: {
                apiKey: apiKey,
                Authorization: `Bearer ${secretKey}`
            },
        })

        if (todos) {
            todos.value = data.value
        }

        console.log("VALUE", data.value);
        console.log("ERROR", error.value);
    }
    return {
        todos,
        getTodo
    }
})