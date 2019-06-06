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
    this.displayTodos();
  },

  changeTodos: function(index, todoText) {
    this.todos[index].todoText = todoText;
    this.displayTodos();
  },

  removeTodos: function(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  },

  toggleCompleted: function(index) {
    let todo = this.todos[index];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  toggleAll: function() {
    let complete = 0;
    let totalTodo = this.todos.length;
    for (let i = 0; i < totalTodo; i++) {
      if (this.todos[i].completed === true) {
        complete++;
      }
      if (complete === totalTodo) {
        for (let i = 0; i < totalTodo; i++) {
          this.todos[i].completed = false;
        }
      } else {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

const handler = {
  displayTodos: function() {
    toDoList.displayTodos();
  },
  toggleAll: function() {
    toDoList.toggleAll();
  },
  addTodos: function() {
    let addTodosText = document.getElementById("addToDosText");
    toDoList.addTodos(addTodosText.value);
    addTodosText.value = "";
  },
  changeTodos: function() {
    let changeToDoIndex = document.getElementById("changeToDoIndex");
    let changeToDoText = document.getElementById("changeToDoText");
    toDoList.changeTodos(changeToDoIndex.valueAsNumber, changeToDoText.value);
    changeToDoIndex.valueAsNumber = "";
    changeToDoText.value = "";
  },
  deleteToDoIndex: function() {
    let deleteToDoIndex = document.getElementById("deleteToDoIndex");
    toDoList.removeTodos(deleteToDoIndex.valueAsNumber);
    deleteToDoIndex.valueAsNumber = "";
  },
  toggleCompleted: function() {
    let toggleCompletedIndex = document.getElementById("toggleCompletedIndex");
    toDoList.toggleCompleted(toggleCompletedIndex.valueAsNumber);
    toggleCompletedIndex.valueAsNumber = "";
  }
};
