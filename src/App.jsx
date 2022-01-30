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
      content: "Work on wordpress",
      status: false
    },
    {
      content: "Organize office main department",
      status: false
    },
    {
      content: "Error solve in HTML template",
      status: false
    }]
  );

  // const [currentTab, setTab] = useState("all");

  const [displayItems, setItems] = useState(todo_items);

  let changeStatus = (obj) => {
    let update = [...todo_items];
    let item = obj;
    item.status = !item.status;
    // console.log(obj);
    update.splice(update.indexOf(obj), 1, item)
    setTodo(update);
  };

  let add = () => {
    if (task) {
      let newArr = [...todo_items];
      newArr.push({
        content: task,
        status: false
      })
      setTask("");
      setTodo(newArr);
      setItems(newArr);
      console.log(newArr);
    }
  };

  return <>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-body">
              <form>
                <input type="text" className="form-control add-task" placeholder="New Task..." onChange={(e) => {
                  setTask(e.target.value)
                  console.log(task);
                }} onKeyDown={
                  (e) => {
                    if (e.key === "Enter")
                      add()
                  }
                } />
              </form>
              <ul className="nav nav-pills todo-nav">
                <li role="presentation" onClick={() => {
                  setItems(todo_items);
                }} className="nav-item all-task active"><a href="#" className="nav-link">All</a></li>
                <li role="presentation" onClick={() => {
                  setItems(todo_items.filter(({ status }) => !status));
                }} className="nav-item active-task"><a href="#" className="nav-link">Active</a></li>
                <li role="presentation" onClick={() => {
                  setItems(todo_items.filter(({ status }) => status));
                }} className="nav-item completed-task"><a href="#" className="nav-link">Completed</a></li>
              </ul>
              <div className="todo-list">
                {displayItems.map((e, index) => {
                  return <div className="todo-item" key={e.content}>
                    <div className="checker"><span className=""><input type="checkbox" onChange={() => changeStatus(e)} checked={e.status} /></span></div>
                    {e.status ? <span><s>{e.content}</s></span> : <span>{e.content}</span>}
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