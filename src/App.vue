<template>
  <h3>Todo List</h3>
  <div>
    <input type="text" v-model="newTodo"> <button @click="addTextTodo">新增</button>
  </div>
  <ul>
    <li v-for="todo in todoList" :key="todo.id">
      {{ todo.text }} - {{ todo.done ? '完成' : '未完成' }}
      <input
        type="checkbox"
        @change="toggleTodo(todo.id)"
        :checked="todo.done"
      />
      <button @click="deleteTodo(todo.id)">删除</button>
    </li>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapState, mapActions } from 'pinia' 
import { useMainStore } from './store'

@Options({
  computed: {
    ...mapState(useMainStore, ['todoList']),
  },
  methods: {
    ...mapActions(useMainStore, ['addTodo', 'toggleTodo', 'deleteTodo']),
    addTextTodo() {
      this.addTodo(this.newTodo);
      this.newTodo = '';
    }
  }
})
export default class App extends Vue {}
</script>
