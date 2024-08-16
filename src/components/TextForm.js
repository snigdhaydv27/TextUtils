import React, {useState} from 'react';
import './TextForm.css';

export default function TextForm(props) {
  const Uppercase = () =>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const Lowercase = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const clearText = ()=>{
    let newText = "";
    setText(newText)
  }
  const removeExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
<div class="mb-3">
  <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<div className='btnCover'>
<button className='btn btn-primary' onClick={Uppercase}>Convert to UpperCase</button>
<button className='btn btn-primary mx-3' onClick={Lowercase}>Convert to Lowercase</button>
<button className='btn btn-primary' onClick={clearText}>Clear Text</button>
<button className='btn btn-primary mx-3' onClick={removeExtraSpace}>Remove Extra Space</button>
</div>
</div>
<div className="container">
<h1>Your text Summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008*text.split(" ").length} minutes to read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the text box to preview it."}</p>
</div>
</>
  )
}
