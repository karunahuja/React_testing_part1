import React from 'react'
import PropTypes from 'prop-types'



function Input({secretWord}){

const [currentGuess,setCurrentGuess]=React.useState("");





return(
    <div data-test="input-component">

<form className="form-inline">

    <input data-test="input-box" type="text" className="mb-2 mx-sm-3"
    placeholder="Enter guess" value={currentGuess} onChange={(event)=>setCurrentGuess(event.target.value)}>

    </input>
<button data-test="submit-button"

onClick={(event)=>{
event.preventDefault();
    setCurrentGuess("");
}}

className="btn btn-primary mb-2">

Submit

</button>

</form>
    </div>
)
}


Input.propTypes ={
    secretWord:PropTypes.string.isRequired
}



export default Input