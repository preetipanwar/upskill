import todolist from "../../data/todoList"

export default function TodoList(){
    return (
        <>
           { todolist.map(function(todo){
                return <Todo name={todo.name} items = {todo.items} />
           }) }
        </>
    )
}

export function Todo({name, items}) {
  return (
    <div className="card">
        <h2>{name}</h2>
        <ul>
            { items.map(function(item){
                return <li>{ item }</li>
            })}
        </ul>
    </div>
  )
}
