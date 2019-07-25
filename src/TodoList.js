import React, { Component } from 'react'
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getList, addItem, deleteItem } from './store/creators';
import TodoListUI from './TodoListUI';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
    }

    componentDidMount() {
        // this.props.dispatch(getList());
        this.props.getList();
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
        this.props.addItem(inputValue);
        this.setState({
            inputValue: ''
        });
    }

    clickItem = event => {
        console.log(event.target.dataset.id);
        this.props.deleteItem(event.target.dataset.id);
    }

    render() {
        return (
            <TodoListUI
                changeInputValue={this.changeInputValue.bind(this)}
                inputValue={this.state.inputValue}
                add={this.add.bind(this)}
                list={this.props.list}
                clickItem={this.clickItem.bind(this)}
                listLoading={this.props.listLoading}
            />
        );
    }
}

const mapStateToProps = ({ list, listLoading }) => ({ list, listLoading });

// const mapDispatch = (dispatch) => ({
//     getList: () => dispatch(getList()),
//     addItem: (name) => dispatch(addItem(name)),
//     deleteItem: (id) => dispatch(deleteItem(id)),
// });
// const mapDispatch = dispatch => bindActionCreators(
//     { getList, addItem, deleteItem },
//     dispatch
// );
const mapDispatch = { getList, addItem, deleteItem };

export default connect(mapStateToProps, mapDispatch)(TodoList);