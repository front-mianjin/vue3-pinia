import { getTodoList, TodoItem } from '@/models/todo';
import { defineStore } from 'pinia';

// 函数用use开头，是一种风格
export const useMainStore = defineStore('mainStore', {
  state: () => {
    return {
      todoList: getTodoList(),
    };
  },
  actions: {
    // 新增一个todo
    addTodo(text: string) {
      console.log('addtodo')
      if (!text) return;
      this.todoList.push({
        id: +new Date(),
        text,
        done: false,
      } as TodoItem)
    },
    // 更新todo状态
    toggleTodo(id: number) {
      const todo = this.todoList.find(todo => todo.id === id);
      if (todo) todo.done = !todo.done;
    },
    // 删除todo
    deleteTodo(id: number) {
      this.todoList = this.todoList.filter(todo => todo.id !== id);
    }
  }
})