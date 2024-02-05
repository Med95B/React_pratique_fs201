
function Form(){

    function handleSubmit(e){
            e.preventDefault()
            alert('you clicked Submit')
    }

    return(
        <form onSubmit={(e)=>handleSubmit(e)}>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form