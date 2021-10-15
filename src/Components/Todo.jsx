import React from "react";
import Header from "./header";
import InputField from "./input";
import TodoList from "./todo-list";

class Todo extends React.Component {
  state = {
    value:'',
    list: [{id : 1 , text:'item 1', checked : false ,editing: false}],
  };
  onChange = ({currentTarget : input}) => {
    let value = this.state.value ;
    value = input.value ;

    const list = [...this.state.list] ;
    list.map((item) => item.editing= false) ;

    
    this.setState({value ,list}) ;
}
  onDelete =(id) => {
        let list = [...this.state.list] ;
       list =  list.filter((item) => {return id !== item.id}); 

       this.setState({list}) ;


        console.log(list)
  }
  onSubmit =() => {
      const regex = /[A-Z 0-9]/i ; 
      let list = [...this.state.list] ;
      let item = {id : this.state.list.length + 1 , text: this.state.value ,checked : false , editing: false} ;
      if (this.state.value.match(regex)){
          list.push(item) ; 
      }
      
      this.setState({list, value: ''}) ;
  }
  onChecked = (id) =>{
    const list = [...this.state.list] ;
    let item = list.filter((item) => {return item.id === id}) ;
    if (item[0].checked === true ){
      item[0].checked = false; 
    }
    else {
      item[0].checked = true ;
    }
    
  this.setState({list}) ;
    
  }
  onDoubleClick = (id) => {
    const list = [...this.state.list] ;
    let item = list.filter((item) => {return item.id === id}) ;
    if (item[0].editing === false ){
      item[0].editing = true; 
      item[0].checked = false ;
    }
    else {
      item[0].editing = false ;
    }
    list.forEach((item) => {
      if(item.id !== id){
        item.editing = false ;
      }
    })
  
  this.setState({list}) ;
    

  }
  todoEdit =(e) => {
    const list =[...this.state.list] ;
      let item = list.filter((item) => {return   parseInt(e.currentTarget.id) === item.id}) ;
      item[0].text = e.currentTarget.value ;
      this.setState({list}) ;
  }
  onTodoSubmit = (id) =>{
    const list = [...this.state.list] ;
    let item = list.filter((item) => {return item.id === id}) ;
      item[0].editing = false ;
  
  this.setState({list}) ;
  }

  render() {
    return (
      <div className="container">
        <Header />
        <InputField onSubmit={this.onSubmit} inputValue={this.state.value} onChange={this.onChange}  />
        <TodoList list={this.state.list} onTodoSubmit={this.onTodoSubmit} onChecked={this.onChecked} onDelete= {this.onDelete} todoEdit={this.todoEdit} onDoubleClick={this.onDoubleClick} />
      </div>
    );
  }
}

export default Todo;
