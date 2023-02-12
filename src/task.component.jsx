class TaskComponent extends React.Component {
    constructor(p) {
        super(p);
        this.parent = p.parent;
        this.state = { done: false, init: true, edit: true, task: "", tempValue: "" };
    }

    edit = () => {
        this.setState({edit: true});
    }

    cancel = () => {
        this.setState({edit: false});
    }

    save = () => {
        if (this.state.init)
            this.setState({init: false});
        this.setState({task: this.state.tempValue, edit: false});
    }

    tempValue = (e) => {
        this.setState({tempValue: e.target.value});
    }

    undone = () => {
        this.setState({done: false});
    }

    done = () => {
        this.setState({done: true});
    }

    hapus = () => {
        this.parent.removeTask(this);
    }

    render() {
        let labelStyle = {display: "inline", textDecoration: "none"};
        let btnDone = {display: "inline"}; let btnUndone = {display: "none"};
        let editStyle = {display: "none"};
        let showStyle = {display: "inline"};

        if (this.state.edit) {
            editStyle.display = "inline";
            labelStyle.display = "none";
            showStyle.display = "none";
        }

        if (this.state.done) {
            labelStyle.textDecoration = "line-through";
            btnDone.display = "none";
            btnUndone.display = "inline";
        } else {
            btnDone.display = "inline";
            btnUndone.display = "none";
        }

        return (
            <div>
                <label style={labelStyle}>{this.state.task}</label>
                <input style={editStyle} type="text" placeholder="Isikan Task" onChange={this.tempValue} />
                <button style={showStyle} onClick={this.edit}>Edit</button>
                <button style={editStyle} onClick={this.cancel}>Cancel</button>
                <button style={editStyle} onClick={this.save}>Save</button>
                <button onClick={this.hapus}>Hapus</button>
                <div style={showStyle}>
                    <button onClick={this.done} style={btnDone}>Done</button>
                    <button onClick={this.undone} style={btnUndone}>Undone</button>
                </div>
            </div>
        );
    }
}