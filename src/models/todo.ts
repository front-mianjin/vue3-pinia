export interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

export function getTodoList(): TodoItem[] {
  return [
    {
      id: 1,
      text: '进www.1024nav.com学习',
      done: false,
    },
    {
      id: 2,
      text: '减肥20斤',
      done: true,
    }
  ]
}