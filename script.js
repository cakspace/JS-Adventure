const toDoList = {
  todos: [],

  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Nothing to do here...");
    } else {
      for (let i = 0; i < this.todos.length; i++) {
        console.log(`To do #${i + 1}: ${this.todos[i].todoText}`);
      }
    }
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
