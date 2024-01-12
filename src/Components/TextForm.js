import React, {useState} from 'react'

export default function Textform(props) {
      const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText =  text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
      }
      const handleLoClick = ()=>{
        //console.log("Lowercase was clicked" + text);
        let newText =  text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
      }
      const handleClearClick = ()=>{
        let newText =  '';
        setText(newText)
        props.showAlert("Text cleared", "success")
      }
      const handleOnChange = (event)=>{
        //console.log("on change");
        setText(event.target.value)
      }
      const handleCopy = () => {
        //console.log("I am copy");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);

        //eski help se text jo select hoga woh highlight nahi hoga bas copy ho jayega 
        document.getSelection().removeAllRanges();
        
        props.showAlert("Copied to clipboard", "success")
      }
      const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success")
      }
      const [text, setText] = useState('');
      return (
              <>
              <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1 className='mb-4'>{props.heading}</h1>
              <div className="mb-3">
            
              <textarea className="form-control" value={text} onChange= {handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
              </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
              </div>
              <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{(0.008) * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
              </div>
            </>
  )
}
