import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const [text, setText] = useState("");
  console.log(props.theme)
  const textUp = () => {
  // console.log(text);
  let newText = text.toUpperCase();
   setText(newText);
  }
  

  const textLow = () => {
    // console.log(text);
    const newText = text.toLowerCase();
     setText(newText);
    }

    const textClear = () => {
       setText("");
      }

      const textCopy = () => {
        navigator.clipboard.writeText(text)
       }

       const removeExtraSpace = () => {
          let newText = text.split(/[ ]+/);
          setText(newText.join(" "));
       }
       
  const changeVal = (event) =>{
    setText(event.target.value)
  }


  return (
    <div className="container my-4">
    <div className="mb-3" style={{color: props.mode === "dark"? "#fff":"#000"}}>
    <h3 className={`${props.mode === "light"? "text-dark":"text-light"}`}>{props.heading}</h3>
    <textarea placeholder='Enter Text Here' className={`form-control ${props.mode === "dark"? "bg-dark text-light" : "bg-light text-dark"}`} 
    value={text} onChange={changeVal} id="exampleFormControlTextarea1" rows="8"></textarea>
    <div className='my-4'>
    <button className={`btn btn-outline-${props.theme} mx-2`} id='uper' onClick={textUp}>Uppercase </button>
    <button className={`btn btn-outline-${props.theme} mx-2`} onClick={textLow}>Lowercase </button>
    <button className={`btn btn-outline-${props.theme} mx-2`} onClick={textClear}>Clear Text </button>
    <button className={`btn btn-outline-${props.theme} mx-2`} onClick={textCopy}>Copy Text </button>
    <button className={`btn btn-outline-${props.theme} mx-2`} onClick={removeExtraSpace}>Remove Extra Space</button>
    </div>
    <div className='container'>
       <h3>Your Text Summary</h3>
       <p>{text === ""?"0":text.trim().split(/\s+/).length} Words and {text.length} Characters</p>
       <p>{text === ""? "0" : 0.008 * text.split(" ").length} Minutes read</p>
       <h3>Preview</h3>
       <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
  </div>
  </div>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
  };

TextForm.defaultProps = {
    heading: 'Text Utils'
  };
