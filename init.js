var todo = ReactDOM.render(React.createElement(TodoComponent, null), document.getElementById("todoComponent"));

document.getElementById("btnTambahTodo").onclick = function () {
    todo.addTask();
};