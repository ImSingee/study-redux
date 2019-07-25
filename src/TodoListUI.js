import React from 'react'
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

const TodoListUI = (props) => (
    <div style={{ margin: '30px' }}>
        <h1>TodoList</h1>
        <div>
            <Input
                style={{ width: '200px', marginRight: '10px' }}
                onInput={props.changeInputValue}
                value={props.inputValue}
            />
            <Button
                type="primary"
                onClick={props.add}
                disabled={!props.inputValue}
            >增加</Button>
        </div>
        <div>
            <List
                style={{ width: '300px', marginTop: '10px' }}
                bordered
                dataSource={props.list}
                loading={props.listLoading}
                renderItem={item => <List.Item
                    data-id={item.id}
                    onClick={props.clickItem}
                >{item.name}</List.Item>}
            />
        </div>
    </div>
);

export default TodoListUI;