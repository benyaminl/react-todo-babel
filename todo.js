class Todo extends React.Component {

    constructor(p) {
        super(p);
        this.state = {todoList : []};
    }

    render() {
        let message = "Tidak ada Todo List. Silahkan ditambahkan!"
        if (this.state.todoList.length > 0) 
            message = "";
        return (
            <div>
                {this.state.todoList}
                {message}
            </div>
        );
    }
}

ReactDOM.render(<Todo />, 
    document.getElementById("todoComponent"));