import React, { Component } from 'react'
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

class TodoListUI extends Component {
    render() {
        return (
            <div style={{ margin: '30px' }}>
                <h1>TodoList</h1>
                <div>
                    <Input
                        style={{ width: '200px', marginRight: '10px' }}
                        onInput={this.props.changeInputValue}
                        value={this.props.inputValue}
                    />
                    <Button
                        type="primary"
                        onClick={this.props.add}
                        disabled={!this.props.inputValue}
                    >增加</Button>
                </div>
                <div>
                    <List
                        style={{ width: '300px', marginTop: '10px' }}
                        bordered
                        dataSource={this.props.list}
                        renderItem={item => <List.Item
                            data-id={item.id}
                            onClick={this.props.clickItem}
                        >{item.name}</List.Item>}
                    />
                </div>
            </div>
        );
    }
}

export default TodoListUI;