import React, { useState } from 'react';
import './App.css';

function App() {
let [task, setTask] = useState("");
let [todo_items, setTodo] = useState(
    [{
      content: "Create theme",
      status: false
    },
    {
      content:"Work on wordpress",
      status: false
    },
    {
      content:"Organize office main department",
      status: false
    },
    {
      content:"Error solve in HTML template",
      status: false
    }]
);

let changeStatus = (obj) =>{
  let update = [...todo_items];
  let item = obj;
  item.status = !item.status;
  // console.log(obj);
  update.splice(update.indexOf(obj),1, item)
  setTodo(update);
};

let add = () => {
  if(task){
    let newArr = [...todo_items];
    newArr.push({
      content: task,
      status: false
    })
    setTask("");
    setTodo(newArr);
    console.log(newArr);
  }
};

  return <>
    <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="card card-white">
                <div className="card-body">
                    <form action="javascript:void(0);">
                        <input type="text" className="form-control add-task" placeholder="New Task..." onChange={(e) => {setTask(e.target.value)
                        console.log(task);
                        }} onKeyDown = {
                          (e) => {
                          if(e.key==="Enter")
                            add()
                          }
                          }/>
                    </form>
                    <ul className="nav nav-pills todo-nav">
                        <li role="presentation" className="nav-item all-task active"><a href="#" className="nav-link">All</a></li>
                        <li role="presentation" className="nav-item active-task"><a href="#" className="nav-link">Active</a></li>
                        <li role="presentation" className="nav-item completed-task"><a href="#" className="nav-link">Completed</a></li>
                    </ul>
                    <div className="todo-list">
                      {  todo_items.map((e,index) => {
                          return <div className="todo-item" key={index}>
                            <div className="checker"><span className=""><input type="checkbox" onChange= {() => changeStatus(e)}/></span></div>
                            {e.status?<span><s>{e.content}</s></span>:<span>{e.content}</span>}
                            <a href="javascript:void(0);" className="float-right remove-todo-item"><i className="icon-close"></i></a>
                          </div>
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>  
  </>;
}

export default App;