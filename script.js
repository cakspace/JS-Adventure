const toDoList = {
  todos: ["index 1", "index 2", "index 3"],

  displayTodos: function() {
    console.log(this.todos);
  },

  addTodos: function(todo) {
    this.todos.push(todo);
    console.log(this.todos);
  },

  changeTodos: function(index, value) {
    this.todos[index] = value;
    console.log(this.todos);
  },

  removeTodos: function(index) {
    this.todos.splice(index, 1);
    console.log(this.todos);
  }
};
