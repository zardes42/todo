import React from 'react';
import TodoItem from './todo-item';

class TodoList extends React.Component {
    render() { 
        const {list, onDelete, onChecked,onDoubleClick ,todoEdit ,onTodoSubmit} = this.props ; 
        return <div className='container'>
            {list.map((item) => {return <TodoItem key={item.id} onChecked ={onChecked} onTodoSubmit={onTodoSubmit} editing ={item.editing} Checked = {item.checked} id ={item.id} text={item.text} onDelete= {onDelete} todoEdit ={todoEdit} onDoubleClick={onDoubleClick} />})}
        </div>
;
    }
}
 
export default TodoList;
