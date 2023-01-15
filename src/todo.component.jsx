class TodoComponent extends React.Component {

    constructor(p) {
        super(p);
        this.state = {todoList : []};
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    addTask() {
        let todoList = this.state.todoList;
        let ref = React.createRef();
        let key = Math.random().toString(36).substring(7);
        todoList.push(<TaskComponent key={key} ref={ref} parent={this} />);
        this.setState({todoList : todoList});
        // console.log(this.render());
    }

    removeTask(t) {
        let todoList = this.state.todoList;
        
        // @ see
        todoList = todoList.filter(el => {
            return el.ref.current.state.task !== t.state.task
        }); 

        // console.log(tIndex);
        console.log(todoList);
        this.setState({todoList : todoList});
    }

    render() {
        let message = "Tidak ada Todo List. Silahkan ditambahkan!"
        if (this.state.todoList.length > 0) 
            message = "";
        return (
            <div>
                <div>
                {this.state.todoList}
                </div>
                {message}
            </div>
        );
    }
}