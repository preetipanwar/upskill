import todolist from "../../data/todoList"

export default function TodoList(){
    return (
        <>
            <Todo name={todolist[0].name} items = {todolist[0].items} />
            <Todo name={todolist[1].name} items = {todolist[1].items} />
            <Todo name={todolist[2].name} items = {todolist[2].items} />
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
