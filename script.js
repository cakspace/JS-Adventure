const toDoList = {
  todos: [],

  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Nothing to do here...");
    } else {
      //if not empty, print
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log(`(X) To do #${i + 1}: ${this.todos[i].todoText}`);
        } else {
          console.log(`( ) To do #${i + 1}: ${this.todos[i].todoText}`);
        }
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
  },
  //------------------doesnt work...-----------------------
  toggleAll: function() {
    let complete = 0;
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed === true) {
        complete++;
      }
      if (complete === this.todos.length) {
        this.todos[i].completed = false;
      } else if (complete !== this.todos.length) {
        this.todos[i].completed = true;
      } else {
        this.todos[i].completed = true;
      }
    }
  }
};
