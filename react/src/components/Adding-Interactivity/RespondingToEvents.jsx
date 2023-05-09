
export default function RespondingToEvents({buttonName}) {
    function onSmash(){
        alert('the button was clicked')
    }
    return (
    <div className="card">
        <Button name = { buttonName } onSmash ={onSmash} />
    </div>
  )
}

function Button({name, onSmash}){
    return <button onClick={onSmash}>{name}</button>   
}

