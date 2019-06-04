const toDoList = {
  todos: [],

  displayTodos: function() {
    console.log(this.todos);
  },

  addTodos: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    console.log(this.todos);
  },

  changeTodos: function(index, todoText) {
    this.todos[index].todoText = todoText;
    console.log(this.todos);
  },

  removeTodos: function(index) {
    this.todos.splice(index, 1);
    console.log(this.todos);
  },

  toggleCompleted: function(index) {
    let todo = this.todos[index];
    todo.completed = !todo.completed;
  }
};
