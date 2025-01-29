
import React, { useState } from 'react';
export default function TextForm(props) {
    const changeToUpper = (event) => {
        event.preventDefault();
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("text converted to uppercase", "seccess");
        document.title ="uppercase";
        
    }

    const changeToLower = (event) => {
        event.preventDefault();
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("text converted to lowercase","primary");
        document.title ="lowercase";
        
    }
    const clear = (event) => {
        event.preventDefault();
        setText("");
        props.showAlert("text clear", "danger");
        document.title ="clear";
       
    }

    const reverse = (event) => {
        event.preventDefault();
        let reverseText = text.split("").reverse().join("");
        setText(reverseText);
        props.showAlert("text converted to reverse", "primary");
        document.title ="reverse";
        
    }

    const copyToClipboard = (event) => {
        event.preventDefault();
        navigator.clipboard.writeText(text)
            props.showAlert("text copied","primary");
            document.title ="copy";
           
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className='container'>
                <h2 style={{
                    color: props.mode === "dark" ? "white" : "black",
                }}>{props.header}</h2>
                <form>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                            backgroundColor: props.mode === "dark" ? "gray" : "white",
                            color: props.mode === "dark" ? "white" : "black",
                        }} id="mybox" rows="8" placeholder='enter here'></textarea>

                    </div>
                    <button className="btn btn-primary mx-3" onClick={changeToUpper}>to uppercase</button>
                    <button className="btn btn-primary mx-3" onClick={changeToLower}>to lowercase</button>
                    <button className="btn btn-success mx-3" onClick={clear}>clear</button>
                    <button className="btn btn-success mx-3" onClick={reverse}>reverse</button>
                    <button className="btn btn-success mx-3" onClick={copyToClipboard}>copy</button>

                    
                </form>
            </div>
            <div className='container my-20' >
                <h1 style={{ color: props.mode === "dark" ? "white" : "black", }}> {text.split(" ").length} words and {text.length} characters </h1>
                <h1 style={{ color: props.mode === "dark" ? "white" : "black", }}>you can  reads abive text  in  {0.02 * text.split(" ").length} minutes</h1>
                <p style={{ color: props.mode === "dark" ? "white" : "black", }}>preview</p>
                <h6 style={{ color: props.mode === "dark" ? "white" : "black", }}>{text}</h6>
            </div>

        </>
    )
}
