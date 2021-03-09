import { MdDone, MdDelete } from 'react-icons/md';

// ()=>     fat arrow functions  funciones de flecha gorda ;

function TodoListItem({ descripcion, id, completed, doneHandler, deleteHandler }) {
  const onClick = (e) => {
    doneHandler(id);
  }
  const onDeleteClick = (e) => {
    deleteHandler(id);
  }


  const styles = {
    backgroundColor: "rgba(0,0,0,0,0.5)",
    display: "flex",
    padding: "1rem",
    justifyContent: "space-between",
    alignItems:"center",
  }

  const myClass = (completed) ? "striked" : "";
  return (
    <li style={styles}>
      <span className={myClass}>{descripcion}</span>
      <button onClick={onClick}><svg class="h-8 w-8 text-green-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M7 11v 8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg></button>
      <button onClick={onDeleteClick}><svg class="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg></button>
    </li>);
}

function TodoList({ todos, doneHandler, deleteHandler }) {
  const todoItems = todos.map((o) => {
    return (
      <TodoListItem
        key={o.doneHandlerid}
        descripcion={o.description}
        id={o.id}
        completed={o.completed}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
    )
  });
  return (
    <section className="TodoList">
      <ul>
        {todoItems}
      </ul>
    </section>
  );
}

export default TodoList;
