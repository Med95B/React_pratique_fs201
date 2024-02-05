import { useState } from "react";

function RadioCheckbox(props){

const[radio,setRadio]=useState('')
const[check,setCheck]=useState([])

let handelCheck=(val)=>check.includes(val)?(setCheck([...check.filter(item=>item!==val)]),props.Data({check})) 
                                           :(setCheck([...check,val]),props.Data({check}))  

                                           
let handelRadio=(e)=>{
        setRadio(e.target.value)
         props.Data({radio}) 
        }  

    return(
        <div class="form-group">
        <div class="form-group">
    <div class="form-check">
        <input class="form-check-input" type="radio" name="radio" value="option1"
        onChange={(e)=>handelRadio(e)}
        checked
        />
        <label class="form-check-label" for="radio">
          Radio1
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="radio" value="option2"
        onChange={(e)=>handelRadio(e)}
        />
        <label class="form-check-label" for="radio">
        Radio2
        </label>
  </div>
  </div>
  <div class="form-group">
  <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" value="option1" name="check1"
        onChange={(e)=>handelCheck(e.target.value)}
        />
        <label class="form-check-label" for="check1">Check 1</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" value="option2" name="check12"
        onChange={(e)=>handelCheck(e.target.value)}
        />
        <label class="form-check-label" for="check2">Check 2</label>
      </div>
  </div>
        </div>  
  
    )
}
export default RadioCheckbox