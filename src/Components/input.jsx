import React from 'react';
import { FaPlusCircle } from "react-icons/fa"
 
class InputField extends React.Component {

    render() { 
       
        const {onSubmit ,inputValue, onChange} =this.props;
        return <React.Fragment>
<form  className="input-field" onSubmit={(e) => { e.preventDefault(); return  onSubmit}}>
        <input  onChange={onChange}  className="form-control form-control-lg rounded-pill" type="text" placeholder='Add todo...' value={inputValue} aria-label=".form-control-lg example" />
        <button id = 'submit' onClick={onSubmit} className ='btn btn-white ms-3 '> <FaPlusCircle  color='darkcyan' size="30px" className="submit-icon" /> </button>
</form>
 </React.Fragment>;
    }
}
 
export default InputField;