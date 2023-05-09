import fruits from "../../data/fruits"

export default function Fruits() {
    function onsmash(){
        alert("the button was clicked")
    }
  return (
    <div className="card">
        <h2>{fruits.name}</h2>
        <ul>
            {fruits.items.map(function(item){
                return <li>{item}</li>
            })}
        </ul>
        <button onClick={onsmash}> click me </button>
    </div>
  )
}
