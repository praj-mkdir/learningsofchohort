/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

// class Todo {

//   Todo(){
//     this.todolist=[];
//   }
//   add(todo){
//     this.todolist.push(todo);
//   }
//   remove(todo){
//     const indextodo = this.todolist.indexOf(todo);
//     if(indextodo !==-1){
//       this.todolist.splice(indextodo,1);

//     }
//   }
//   update(index,updatedTodo){
//     if(index >=0 && index < this.todolist.length){

//       this.todolist[index]=updatedTodo
//     }
//   }
//   getAll(){
//     return this.todolist;
//   }
//   get(todo){
//     const indextodo = this.todolist.indexOf(todo);
//     if(indextodo !==-1){
//       return this.todolist[indextodo];

//     }
//   }
//   clear(){
//     this.todolist.length=0;
//   }
// }

class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  remove(index) {


        this.todos.splice(index, 1);
    // 
  }
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index,1,updatedTodo);
    }
  }
  getAll() {
    return this.todos;
  }
  get(indexOfTodo) {
    if(indexOfTodo < this.todos.length){
      return this.todos[indexOfTodo];

    }
    return null;
  }
  clear() {
    this.todos = [];
  }
}
module.exports = Todo;
