import { useState } from "react";

function Selection(props){

    const [select,setSelect]=useState('')

    let handelSelect=(e)=>{
        setSelect(e.target.value)
        props.Data({select})
    }

    return(
<div class="form-group col-4">
    <label for="select">Selection</label>
    <select class="form-control" name="select"
    onChange={(e)=>handelSelect(e)}
    value={select}
    >
      <option value="val1">val1</option>
      <option value="val2">val2</option>
      <option value="val3">val3</option>
      <option value="val4">val4</option>
      <option value="val5">val5</option>
    </select>
  </div>
    )
}
export default Selection