import React, { Component } from 'react'
import store from './store';
import { addItem, deleteItem } from './store/creators';
import TodoListUI from './TodoListUI';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign(store.getState(), {
            inputValue: ''
        });
        store.subscribe(() => {
            this.setState(store.getState);
        });
    }

    changeInputValue(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    add(event) {
        const { inputValue } = this.state;

        if (!inputValue) return;

        // console.log(this.state.inputValue);
        store.dispatch(addItem(inputValue));
        this.setState({
            inputValue: ''
        });
    }

    clickItem = event => {
        console.log(event.target.dataset.id);
        store.dispatch(deleteItem(event.target.dataset.id));
    }

    render() {
        return (
            <TodoListUI
                changeInputValue={this.changeInputValue.bind(this)}
                inputValue={this.state.inputValue}
                add={this.add.bind(this)}
                list={this.state.list}
                clickItem={this.clickItem.bind(this)}
            />
        );
    }
}

export default TodoList;