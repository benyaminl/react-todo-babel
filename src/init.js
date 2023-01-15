var todo = ReactDOM.render(<TodoComponent />, 
document.getElementById("todoComponent"));

document.getElementById("btnTambahTodo").onclick = function() {
    todo.addTask();
};