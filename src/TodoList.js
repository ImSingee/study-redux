import React, { Component } from 'react'
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import store from './store';
import { addItem, deleteItem } from './store/creators';

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
            <div style={{ margin: '30px' }}>
                <h1>TodoList</h1>
                <div>
                    <Input
                        style={{ width: '200px', marginRight: '10px' }}
                        onInput={this.changeInputValue.bind(this)}
                        value={this.state.inputValue}
                    />
                    <Button
                        type="primary"
                        onClick={this.add.bind(this)}
                        disabled={!this.state.inputValue}
                    >增加</Button>
                </div>
                <div>
                    <List
                        style={{ width: '300px', marginTop: '10px' }}
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => <List.Item
                            data-id={item.id}
                            onClick={this.clickItem}
                        >{item.name}</List.Item>}
                    />
                </div>
            </div>
        );
    }
}

export default TodoList;