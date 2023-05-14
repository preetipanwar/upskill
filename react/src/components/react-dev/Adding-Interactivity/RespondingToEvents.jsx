
export default function RespondingToEvents({buttonName}) {
    function onSmash(){
        alert('the button was clicked')
    }
    return (
    <div className="card">
        <Button name = { buttonName } onSmash ={onSmash} />
        <SignUp />
    </div>
  )
}

function Button({name, onSmash}){
    return <button onClick={onSmash}>{name}</button>   
}

function SignUp(){
    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                alert('form was submitted')
            }
            }>
                <input type="text" placeholder="placeholder" />
                <button>Submit</button>
            </form>
        </>
    )
}