import React, { Component } from 'react'
import axios from 'axios';
import store from './store';
import { setItems, addItem, deleteItem } from './store/creators';
import TodoListUI from './TodoListUI';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign(store.getState(), {
            inputValue: '',
            listLoading: true
        });
        store.subscribe(() => {
            this.setState(store.getState);
        });
    }


    componentDidMount() {
        const url = 'https://easy-mock.com/mock/5d3998a7d88a4d2dce5b9e18/study-redux/list';
        axios.get(url).then(({ data }) => {
            // console.log(data);
            // console.log(data.data.list);
            store.dispatch(setItems(data.data.list));
            this.setState({
                listLoading: false
            })
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
                listLoading={this.state.listLoading}
            />
        );
    }
}

export default TodoList;