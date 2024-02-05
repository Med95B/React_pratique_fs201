import { useState } from "react";

function TextArea(props){

    const[area,setArea]=useState('')

    let handelArea=(e)=>{
        setArea(e.target.value)
        props.Data({area})
    }

    return(
<div class="form-group">
    <label for="exampleFormControlTextarea1">Textarea</label>
    <textarea class="form-control" rows="3" name="area"
    onChange={(e)=>handelArea(e)}
    value={area}
    ></textarea>
  </div>
    )
}
export default TextArea